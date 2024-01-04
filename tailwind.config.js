/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fade 1.5s cubic-bezier(0.4, 0, 0.6, 1)",
        fadeColor: "fadeColor 1.5 cubic-bezier(0.4, 0, 0.6, 1)",
        borderGradient: "border 4s ease infinite",
        customPulse: "customPulse 2s infinite;",
      },
      keyframes: (theme) => ({
        fade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        customPulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.6,
          },
        },
      }),
      fontFamily: {
        arial: ["arial"],
      },
      border: {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
