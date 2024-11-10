import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2A1540",
        foreground: "var(--foreground)",
         prymary1: "#2A1540",
         primary2: "#7600AB",
         primary3: "#E05BFF",
         primary4: "#FF31FF",
         textColor1: "#FF31FF",
         textColor2: "#E05BFF",
         textColor3: "#FFFFFF",
         border: {
          'pinck': 'linear-gradient(to right, #E05BFF, #863799)',
        },
        iconography1: "#7600AB",
        iconography2: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
