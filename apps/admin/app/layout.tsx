import type { Metadata } from "next";
import { Manrope, Noto_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Peeple Jobs Admin",
    description: "Admin dashboard for Peeple Jobs platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${manrope.variable} ${notoSans.variable}`}>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
                {children}
            </body>
        </html>
    );
}
