/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1536px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: {height: 0},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: 0},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "profile-animation": "profile__animate 8s ease-in-out infinite 1s"
            },
            fontFamily: {
                main: ["Red Hat Display", "sans-serif"],
                p: ['Roboto Mono', 'monospace'],
                title: ['Concert One', 'cursive'],
                chakra: ['Chakra Petch', 'sans-serif']
            },
            colors: {
                'background': '#09090b',
                'input': '#27272a',
                'ring': '#e5e7eb'
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
}