import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get("next") ?? "/jobs"; // Default to jobs page

    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            // Ensure user profile exists
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: profile } = await supabase.from('users').select('id').eq('id', user.id).single();
                if (!profile) {
                    await supabase.from('users').insert({
                        id: user.id,
                        email: user.email!,
                        full_name: user.user_metadata.full_name || user.user_metadata.name || '',
                        avatar_url: user.user_metadata.avatar_url,
                        role: 'seeker' // Default role
                    });
                }
            }
            return NextResponse.redirect(`${origin}${next}`);
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/login?message=Could not login with provider`);
}
