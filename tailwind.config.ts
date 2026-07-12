import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                offwhite: '#FBFAF1',
                chocolate: '#2D140A',
                ivory: '#B97A4B',
                brand: "hsl(var(--brand))",
                "brand-foreground": "hsl(var(--brand-foreground))",
            },
            maxWidth: {
                container: "80rem",
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            keyframes: {
                appear: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                },
                "appear-zoom": {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" }
                }
            },
            animation: {
                appear: "appear 0.5s ease-out forwards",
                "appear-zoom": "appear-zoom 0.5s ease-out forwards"
            }
        },
    },
} satisfies Config
