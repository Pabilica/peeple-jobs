/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#EEF2FF",
                    100: "#E0E7FF",
                    200: "#C7D2FE",
                    300: "#A5B4FC",
                    400: "#818CF8",
                    500: "#6366F1",
                    600: "#4F46E5",
                    700: "#4338CA",
                    800: "#3730A3",
                    900: "#312E81",
                    950: "#1E1B4B",
                },
                secondary: {
                    50: "#F0FDF4",
                    100: "#DCFCE7",
                    200: "#BBF7D0",
                    300: "#86EFAC",
                    400: "#4ADE80",
                    500: "#22C55E",
                    600: "#16A34A",
                    700: "#15803D",
                    800: "#166534",
                    900: "#14532D",
                    950: "#052E16",
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};
