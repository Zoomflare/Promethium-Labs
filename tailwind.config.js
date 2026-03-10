export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f4efe6",
        cream2: "#ede7db",
        ink: "#0d0d08",
        ink2: "#1a1a12",
        green: "#00e676",
        greenDark: "#00b85a",
        greenMid: "#2dba6e",
        greenPale: "#d4f0dc",
        gray: "#7a7468",
        gray2: "#b0a89e",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        mono: ["Martian Mono", "monospace"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        promethium: "cubic-bezier(.16, 1, .3, 1)",
        "promethium-out": "cubic-bezier(0, 0, .2, 1)",
      },
    },
  },
  plugins: [],
};

