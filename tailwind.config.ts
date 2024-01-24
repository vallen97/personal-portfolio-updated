import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/componets/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      // https://m3.material.io/theme-builder#/custom
      materialUI: {
        LightPrimary: "#6750A4",
        LightOnPrimary: "#FFFFFF",
        LightPrimaryContainer: "#EADDFF",
        LightOnPrimaryContainer: "#21005D",
        LightSecondary: "#625B71",
        LightOnSecondary: "#FFFFFF",
        LightSecondaryContainer: "#E8DEF8",
        LightOnSecondaryContainer: "#1D192B",
        LightTertiary: "#7D5260",
        LightOnTertiary: "#FFFFFF",
        LightTertiaryContainer: "#FFD8E4",
        LightOnTertiaryContainer: "#31111D",
        LightError: "#B3261E",
        LightOnError: "#FFFFFF",
        LightErrorContainer: "#F9DEDC",
        LightOnErrorContainer: "#410E0B",
        LightBackground: "#FFFBFE",
        LightOnBackground: "#1C1B1F",
        LightSurface: "#FFFBFE",
        LightOnSurface: "#1C1B1F",
        LightOutline: "#79747E",
        LightSurfaceVariant: "#E7E0EC",
        LightOnSurfaceVariant: "#49454F",

        DarkPrimary: "#D0BCFF",
        DarkOnPrimary: "#381E72",
        DarkPrimaryContainer: "#4F378B",
        DarkOnPrimaryContainer: "#EADDFF",
        DarkSecondary: "#CCC2DC",
        DarkOnSecondary: "#332D41",
        DarkSecondaryContainer: "#4A4458",
        DarkOnSecondaryContainer: "#E8DEF8",
        DarkTertiary: "#EFB8C8",
        DarkOnTertiary: "#492532",
        DarkTertiaryContainer: "#633B48",
        DarkOnTertiaryContainer: "#FFD8E4",
        DarkError: "#F2B8B5",
        DarkOnError: "#601410",
        DarkErrorContainer: "#8C1D18",
        DarkOnErrorContainer: "#F9DEDC",
        DarkBackground: "#1C1B1F",
        DarkOnBackground: "#E6E1E5",
        DarkSurface: "#1C1B1F",
        DarkOnSurface: "#E6E1E5",
        DarkOutline: "#938F99",
        DarkSurfaceVariant: "#49454F",
        DarkOnSurfaceVariant: "#CAC4D0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
