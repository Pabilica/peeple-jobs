"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { Chrome, Github } from "lucide-react";

export function SocialAuthButtons() {
    const handleLogin = async (provider: 'google' | 'github') => {
        const supabase = createClient();
        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={() => handleLogin('github')}>
                <Github className="mr-2 h-4 w-4" />
                Github
            </Button>
            <Button variant="outline" onClick={() => handleLogin('google')}>
                <Chrome className="mr-2 h-4 w-4" />
                Google
            </Button>
        </div>
    );
}
