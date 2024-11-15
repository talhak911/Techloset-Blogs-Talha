/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist:[
    'bg-githubBlack',
    'bg-instaPink',
    'bg-facebookBlue',
    'bg-linkedInBlue',
    'bg-twitterBlue',
  ],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        orangeMain:"#d73e0f",
        githubBlack:"#161614",
        instaPink:"#e1306c",
        facebookBlue:"#4267b2",
        linkedInBlue:"#2867b2",
        twitterBlue:"#1da1f2",
        bgLightBlue:'#e2e7fd'
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        pulseCustom: "pulseCustom 1.5s ease-in-out infinite",
        "pulse-delay-1": "pulseCustom 1.5s ease-in-out 0.3s infinite",
        "pulse-delay-2": "pulseCustom 1.5s ease-in-out 0.6s infinite",
        "flip-forward": "flip-forward 0.8s ease-out forwards",
        "flip-back": "flip-back 0.8s ease-out forwards",
      },
      keyframes: {
        pulseCustom: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        "flip-forward": {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "flip-back": {
          "0%": { transform: "rotateY(360deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("group-open", ["&.group-open", ".group-open &"]);
    },
  ],
};
