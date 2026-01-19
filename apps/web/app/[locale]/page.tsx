import Image from "next/image";
import Link from "next/link";
import { industries, jobPostings } from "@/lib/mock-data";

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-[url('/images/hero/hero-banner.png')] bg-cover bg-center opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            한국에서{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              새로운 커리어
            </span>
            를<br />
            시작하세요
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            외국인 인재를 위한 최고의 잡 포털. 비자 스폰서십 제공 기업과 연결되어
            한국에서 당신의 꿈을 실현하세요.
          </p>

          {/* Search Box */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="직무, 회사, 키워드 검색..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div className="w-full md:w-48">
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white">
                  <option value="">지역 선택</option>
                  <option value="seoul">서울</option>
                  <option value="gyeonggi">경기</option>
                  <option value="incheon">인천</option>
                  <option value="busan">부산</option>
                  <option value="other">기타</option>
                </select>
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                검색
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">
                1,200+
              </div>
              <div className="text-gray-600">채용 공고</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">
                500+
              </div>
              <div className="text-gray-600">등록 기업</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-600">
                8,000+
              </div>
              <div className="text-gray-600">외국인 구직자</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Industry Categories Component
function IndustryCategories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            업종별 채용 공고
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            관심 있는 업종을 선택하여 맞춤형 채용 정보를 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={`/jobs?industry=${industry.id}`}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {industry.jobCount}개 공고
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Jobs Component
function FeaturedJobs() {
  const featuredJobs = jobPostings.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              추천 채용 공고
            </h2>
            <p className="text-gray-600">외국인 지원 가능한 인기 공고</p>
          </div>
          <Link
            href="/jobs"
            className="hidden md:flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            전체보기
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Image
                    src={job.company?.logoUrl || "/images/companies/default.png"}
                    alt={job.company?.companyName || "Company"}
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {job.company?.companyName}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">
                  {job.jobType === "full_time" ? "정규직" : job.jobType === "part_time" ? "파트타임" : "계약직"}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  {job.location}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {job.salaryMin && job.salaryMax
                    ? `${(job.salaryMin / 10000).toFixed(0)}~${(job.salaryMax / 10000).toFixed(0)}만원`
                    : "협의"}
                </span>
                <div className="flex items-center gap-1 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {job.viewCount}
                </div>
              </div>

              {/* Visa Tags */}
              <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-gray-100">
                {job.visaRequirements.slice(0, 3).map((visa) => (
                  <span
                    key={visa}
                    className="px-2 py-0.5 bg-green-50 text-green-600 rounded text-xs"
                  >
                    {visa}
                  </span>
                ))}
                {job.visaRequirements.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{job.visaRequirements.length - 3}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium"
          >
            전체 공고 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          지금 시작하세요
        </h2>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-8">
          무료로 회원가입하고 수천 개의 채용 공고를 확인하세요. 이력서를
          등록하면 기업에서 직접 연락이 옵니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            무료 회원가입
          </Link>
          <Link
            href="/register?type=company"
            className="px-8 py-4 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-400 transition-colors border border-indigo-400"
          >
            기업 회원가입
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Page
export default function Home() {
  return (
    <>
      <HeroSection />
      <IndustryCategories />
      <FeaturedJobs />
      <CTASection />
    </>
  );
}
