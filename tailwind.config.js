/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD", // Bright Blue
        secondary: "#6C757D", // Gray
        accent: "#F8F9FA", // Light Gray (Background)
        dark: "#343A40", // Dark Text
        light: "#FFFFFF", // White
        success: "#198754", // Green (for success messages, buttons)
        danger: "#DC3545", // Red (for alerts)
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
