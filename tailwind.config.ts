import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "SF Pro Text",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica",
                    "Arial",
                    "sans-serif"
                ],
                mono: [
                    "SF Mono",
                    "Menlo",
                    "Monaco",
                    "Courier New",
                    "monospace"
                ]
            },
            colors: {
                'accent': '#0066FF', // Example "intellectual" blue, standard Apple-ish
                'muted': '#F5F5F7', // Apple-ish gray
                'card': '#FFFFFF',
            }
        },
    },
    plugins: [],
};
export default config;
