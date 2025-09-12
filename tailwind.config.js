/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#27363B',
                secondary: '#9CC118',
                accent: '#DBD525',
                dark: '#000000',
                light: '#F7F8FA',
                gray: {
                    custom: '#595959',
                }
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'poppins-medium': ['Poppins Medium', 'sans-serif'],
                'poppins-semibold': ['Poppins SemiBold', 'sans-serif'],
                'poppins-bold': ['Poppins Bold', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'spin-slow': 'spin 12s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'scale-in': 'scaleIn 0.6s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #9CC118, 0 0 10px #9CC118, 0 0 15px #9CC118' },
                    '100%': { boxShadow: '0 0 10px #9CC118, 0 0 20px #9CC118, 0 0 30px #9CC118' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.8)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-mesh': 'linear-gradient(45deg, #9CC118, #DBD525, #27363B)',
            },
            backdropFilter: {
                'none': 'none',
                'blur': 'blur(20px)',
            },
        },
    },
    plugins: [],
}

