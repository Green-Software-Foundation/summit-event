// tailwind.config.js
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-darkest": "#11283C",
        "primary-dark": "#1A3C5B",
        "primary-default": "#225079",
        "primary-light": "#91A7BC",
        "primary-lighter": "#C8D3DD",
        "secondary-default": "#AECC53",
        "secondary-lightest": "#FBFCF6",
        "gray-darkest": "#111827",
        "subscribe-card-color": "#0F2436",
        "subscribe-input-color": "#132D43",
        "footer-bg": "#0F2436",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".0.135em",
        semigap: "0.175em",
        gap: "0.43em",
      },
    },
  },
  variants: {},
  plugins: [],
}
