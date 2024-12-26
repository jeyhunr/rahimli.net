/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'accent-green': '#64ffda',
                gray: {
                    900: '#111827',
                    800: '#1f2937',
                    400: '#9ca3af',
                    300: '#d1d5db',
                    200: '#e5e7eb',
                    100: '#f3f4f6',
                }
            },
            fontFamily: {
                'mono': ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { opacity: 0.5 },
                    '100%': { opacity: 0.8 },
                }
            }
        },
    },
    plugins: [require("@tailwindcss/typography")],
} 