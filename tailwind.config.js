/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        pulseCustom: 'pulseCustom 1.5s ease-in-out infinite',
        'pulse-delay-1': 'pulseCustom 1.5s ease-in-out 0.3s infinite',
        'pulse-delay-2': 'pulseCustom 1.5s ease-in-out 0.6s infinite',
      },
      keyframes: {
        pulseCustom: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('group-open', ['&.group-open', '.group-open &']);
    },
  ],
};
