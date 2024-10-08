import type { Config } from "tailwindcss";

export const colorScheme = {
  black: "#07080d",
  red: "#ffc0b9",
  green: "#b3f6c0",
  yellow: "#fce094",
  blue: "#a6dbff",
  purple: "#ffcaff",
  cyan: "#8cf8f7",
  white: "#eef1f8",
  brightBlack: "#4f5258",
  brightRed: "#ffc0b9",
  brightGreen: "#b3f6c0",
  brightYellow: "#fce094",
  brightBlue: "#a6dbff",
  brightPurple: "#ffcaff",
  brightCyan: "#8cf8f7",
  brightWhite: "#eef1f8",
  background: "#14161b",
  foreground: "#e0e2ea",
  selectionBackground: "#4f5258",
  cursorColor: "#9b9ea4",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // name: "NvimDark",
        ...colorScheme,
      },
    },
  },
  plugins: [],
};
export default config;
