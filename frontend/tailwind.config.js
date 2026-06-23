/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
              "inverse-on-surface": "#303030",
              "inverse-surface": "#e4e2e1",
              "on-primary-fixed-variant": "#474646",
              "on-secondary-fixed-variant": "#464745",
              "secondary-fixed-dim": "#c7c6c4",
              "tertiary": "#e9c349",
              "on-tertiary-fixed": "#241a00",
              "primary-container": "#121212",
              "on-background": "#e4e2e1",
              "primary-fixed": "#e5e2e1",
              "primary-fixed-dim": "#c8c6c5",
              "on-primary-fixed": "#1c1b1b",
              "tertiary-fixed": "#ffe088",
              "secondary": "#c7c6c4",
              "surface": "#131313",
              "surface-container-low": "#1b1c1c",
              "surface-container-lowest": "#0e0e0e",
              "on-error-container": "#ffdad6",
              "surface-tint": "#c8c6c5",
              "on-surface-variant": "#c4c7c7",
              "outline": "#8e9192",
              "surface-container-high": "#2a2a2a",
              "on-tertiary-container": "#987a00",
              "inverse-primary": "#5f5e5e",
              "surface-bright": "#393939",
              "on-secondary": "#2f312f",
              "tertiary-fixed-dim": "#e9c349",
              "on-tertiary-fixed-variant": "#574500",
              "on-error": "#690005",
              "background": "#131313",
              "secondary-fixed": "#e3e2e0",
              "on-secondary-fixed": "#1a1c1a",
              "on-secondary-container": "#b5b5b2",
              "primary": "#c8c6c5",
              "surface-container-highest": "#353535",
              "on-primary": "#313030",
              "surface-container": "#1f2020",
              "error": "#ffb4ab",
              "error-container": "#93000a",
              "on-tertiary": "#3c2f00",
              "outline-variant": "#444748",
              "surface-dim": "#131313",
              "secondary-container": "#464745",
              "tertiary-container": "#181100",
              "on-surface": "#e4e2e1",
              "surface-variant": "#353535",
              "on-primary-container": "#7e7d7d"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "container-max": "1440px",
              "margin-mobile": "24px",
              "stack-md": "48px",
              "unit": "8px",
              "stack-xl": "120px",
              "margin-desktop": "80px",
              "gutter": "24px"
      },
      "fontFamily": {
              "display-xl-mobile": ["Inter"],
              "headline-lg": ["Inter"],
              "display-xl": ["Inter"],
              "body-lg": ["Inter"],
              "headline-lg-mobile": ["Inter"],
              "body-md": ["Inter"],
              "label-caps": ["Inter"]
      },
      "fontSize": {
              "display-xl-mobile": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
              "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
              "display-xl": ["80px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}],
              "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0.01em", "fontWeight": "400"}],
              "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
              "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
              "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.15em", "fontWeight": "600"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
