-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- USERS Table (Public Profiles linking to auth.users)
create table public.users (
  id uuid references auth.users not null primary key,
  email text not null,
  full_name text,
  role text check (role in ('seeker', 'company', 'admin')) default 'seeker',
  status text check (status in ('active', 'suspended')) default 'active',
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- COMPANIES Table (Profile for company users)
create table public.companies (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) not null, -- The user who owns this company profile
  company_name text not null,
  logo_url text,
  website text,
  industry text,
  location text,
  description text,
  is_verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- JOBS Table
create table public.jobs (
  id uuid default uuid_generate_v4() primary key,
  company_id uuid references public.companies(id) not null,
  title text not null,
  description text not null,
  location text not null,
  salary_min bigint,
  salary_max bigint,
  currency text default 'KRW',
  employment_type text check (employment_type in ('full-time', 'part-time', 'contract', 'freelance', 'internship')),
  visa_sponsorship boolean default false,
  status text check (status in ('active', 'closed', 'draft', 'rejected')) default 'active',
  views int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- APPLICATIONS Table
create table public.applications (
  id uuid default uuid_generate_v4() primary key,
  job_id uuid references public.jobs(id) not null,
  applicant_id uuid references public.users(id) not null,
  status text check (status in ('pending', 'reviewed', 'interview', 'offer', 'rejected')) default 'pending',
  resume_url text,
  cover_letter text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(job_id, applicant_id)
);

-- RESUMES Table (For Seeker Profiles)
create table public.resumes (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) not null,
  title text not null, -- e.g. "Frontend Dev Resume"
  file_url text not null,
  is_primary boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Helper for Admin check (Status: Active)
-- Use security definer to avoid infinite recursion when querying users table in RLS
create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.users
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer;

-- RLS POLICIES

-- Users
alter table public.users enable row level security;
create policy "Public profiles are viewable by everyone." on public.users for select using (true);
create policy "Users can insert their own profile." on public.users for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.users for update using (auth.uid() = id);
create policy "Admins can update any profile." on public.users for update using (is_admin());

-- Companies
alter table public.companies enable row level security;
create policy "Companies are viewable by everyone." on public.companies for select using (true);
create policy "Users can insert company if they are the owner." on public.companies for insert with check (auth.uid() = user_id);
create policy "Owners can update company." on public.companies for update using (auth.uid() = user_id);
create policy "Admins can update any company." on public.companies for update using (is_admin());

-- Jobs
alter table public.jobs enable row level security;
create policy "Active jobs are viewable by everyone." on public.jobs for select using (status = 'active');
create policy "Company owners can view all their jobs." on public.jobs for select using (
  exists (select 1 from public.companies where id = jobs.company_id and user_id = auth.uid())
);
create policy "Admins can view all jobs." on public.jobs for select using (is_admin());
create policy "Company owners can insert jobs." on public.jobs for insert with check (
  exists (select 1 from public.companies where id = company_id and user_id = auth.uid())
);
create policy "Company owners can update jobs." on public.jobs for update using (
  exists (select 1 from public.companies where id = company_id and user_id = auth.uid())
);
create policy "Admins can update any job." on public.jobs for update using (is_admin());

-- Applications
alter table public.applications enable row level security;
create policy "Applicants can view their own applications." on public.applications for select using (auth.uid() = applicant_id);
create policy "Companies can view applications for their jobs." on public.applications for select using (
  exists (
    select 1 from public.jobs 
    join public.companies on jobs.company_id = companies.id
    where jobs.id = applications.job_id and companies.user_id = auth.uid()
  )
);
create policy "Admins can view all applications." on public.applications for select using (is_admin());
create policy "Applicants can insert applications." on public.applications for insert with check (auth.uid() = applicant_id);
create policy "Companies can update applications for their jobs." on public.applications for update using (
  exists (
    select 1 from public.jobs 
    join public.companies on jobs.company_id = companies.id
    where jobs.id = applications.job_id and companies.user_id = auth.uid()
  )
);

-- CHAT SYSTEM

-- Conversations Table (Private 1:1 chats)
create table public.conversations (
  id uuid default uuid_generate_v4() primary key,
  participant1_id uuid references public.users(id) not null,
  participant2_id uuid references public.users(id) not null,
  last_message_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(participant1_id, participant2_id)
);

-- Messages Table
create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  conversation_id uuid references public.conversations(id) on delete cascade not null,
  sender_id uuid references public.users(id) not null,
  content text not null,
  is_read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Chat RLS

-- Conversations
alter table public.conversations enable row level security;
create policy "Users can view their own conversations." on public.conversations for select using (
  auth.uid() = participant1_id or auth.uid() = participant2_id
);
create policy "Users can insert conversations starting with themselves." on public.conversations for insert with check (
  auth.uid() = participant1_id
);

-- Messages
alter table public.messages enable row level security;
create policy "Users can view messages in their conversations." on public.messages for select using (
  exists (
    select 1 from public.conversations
    where id = messages.conversation_id
    and (participant1_id = auth.uid() or participant2_id = auth.uid())
  )
);
create policy "Users can insert messages in their conversations." on public.messages for insert with check (
  auth.uid() = sender_id
  and exists (
    select 1 from public.conversations
    where id = conversation_id
    and (participant1_id = auth.uid() or participant2_id = auth.uid())
  )
);

-- Enable Realtime for Messages
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime add table public.messages;

-- Resumes
alter table public.resumes enable row level security;
create policy "Users can view own resumes." on public.resumes for select using (auth.uid() = user_id);
create policy "Admins can view all resumes." on public.resumes for select using (is_admin());
create policy "Users can insert own resumes." on public.resumes for insert with check (auth.uid() = user_id);

