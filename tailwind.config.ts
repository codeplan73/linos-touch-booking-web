import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryColor: "#F2994A",
        secondaryColor: "#092C4C",
        infoColor: "#2F80ED",
        successColor: "#27AE60",
        warningColor: "#E2B93B",
        errorColor: "#EB5757",
        errorAscent: "#EB5757",
        black1: "#000000",
        black2: "#1D1D1D",
        black3: "#282828",
        white: "#FFFFFF",
        gray1: "#333333",
        gray2: "#4F4F4F",
        gray3: "#828282",
        gray4: "#BDBDBD",
        gray5: "#EOEOEO",
      },
    },
  },
  plugins: [],
};
export default config;
