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
        poppins: ["Poppins", "sans-serif"],
        freckle: ["Freckle Face", "system-ui"],
      },
      colors: {
        background: "#2A1540",
        foreground: "var(--foreground)",
        borderpink: "#e05bff",
        prymary1: "#2A1540",
        primary2: "#7600AB",
        primary3: "#E05BFF",
        primary4: "#FF31FF",
        textColor1: "#FF31FF",
        textColor2: "#E05BFF",
        textColor3: "#FFFFFF",
        textColor4: "#8769AE",
        border: {
          'pinck': 'linear-gradient(to right, #E05BFF, #863799)',
        },
        iconography1: "#7600AB",
        iconography2: "#FFFFFF",
      },
      backgroundImage: {
        'backgroundgradiant': 'linear-gradient(to bottom, #2A1540 10%, #712789 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
