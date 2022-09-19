/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "428px",
      md: "600px",
      lg: "900px",
      xl: "1000px",
    },
    fontSize: {
      // ts1 = title preset sans 1, t1 = title preset 1
      aPriv: [
        "20px",
        {
          letterSpacing: ".1em",
          lineHeight: "40px",
        },
      ],
      ts1: [
        "76px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "76px",
        },
      ],
      ts2: [
        "61px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "61px",
        },
      ],
      ts3: [
        "48px",
        {
          // letterSpacing: ".02em",
          lineHeight: "58px",
        },
      ],
      ts4: [
        "39px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "48px",
        },
      ],
      ts5: [
        "31px",
        {
          lineHeight: "38px",
          letterSpacing: "-0.02em",
        },
      ],
      ts6: [
        "25px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "31px",
        },
      ],
      ts7: [
        "20px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "30px",
        },
      ],
      t1: [
        "76px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "88px",
        },
      ],
      t2: [
        "61px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "80px",
        },
      ],
      t3: [
        "48px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "58px",
        },
      ],
      t4: [
        "39px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "48px",
        },
      ],
      t5: [
        "31px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "38px",
        },
      ],
      t6: [
        "25px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "31px",
        },
      ],
      t7: [
        "20px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "30px",
        },
      ],
      b1: [
        "20px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "30px",
        },
      ],
      b2: [
        "18px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "28px",
        },
      ],
      b3: [
        "16px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "24px",
        },
      ],
      bs4: [
        "14px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "21px",
        },
      ],
      bu: [
        "20px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "32px",
        },
      ],
      u1: [
        "14px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "24px",
        },
      ],
      u2: [
        "12px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "12px",
        },
      ],
      ut3: [
        "12px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "auto",
        },
      ],
      ul1: [
        "14px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "24px",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "card-pattern": "url('/img/svg/legit-pattern.svg')",
        "cart-stroke": "url('/img/svg/cart-stroke.svg')",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
      },
      colors: {
        legYellow: "#e3e562",
        legWhite: "#f6f6f6",
        legYellowHigh: "#FCFF70",
        legBlack: "#0C0C0C",
      },
      fontFamily: {
        "title-preset": ["title-preset", "serif"],
        "title-preset-sans": ["title-preset-sans", "sans"],
        "body-preset": ["body-preset", "serif"],
        "body-preset-sans": ["body-preset-sans", "sans"],
        "body-preset-utility": ["body-preset-utility", "monospace"],
        "utility-preset": ["utility-preset", "monospace"],
        "utility-preset-title": ["utility-preset", "monospace"],
        "utility-preset-link": ["utility-preset", "monospace"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addComponents, config }) {
      const buttons = {
        ".btn": {
          padding: ".5rem",
          borderRadius: "1.75rem",
          display: "inline-flex",
          alignItems: "center",
          border: "1px solid black",
          fontFamily: "title-preset-sans",
          fontSize: config("theme.fontSize.b1"),
          minWidth: "9rem",
          justifyContent: "center",
          color: config("theme.colors.legBlack"),

          "&:hover": {
            backgroundColor: config("theme.colors.legYellowHigh"),
          },
        },
        ".btnInner": {
          marginLeft: ".5rem",
          marginRight: "0rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          minWidth: "auto",
          textTransform: "uppercase",
        },
        ".btnSize": {
          fontSize: config("theme.fontSize.ts6"),
          minWidth: "3rem",
          borderRadius: "1rem",
          padding: ".75rem",

          "&:hover, &checked": {
            backgroundColor: config("theme.colors.legBlack"),
            color: config("theme.colors.legYellow"),
          },
          "&:selected": {
            backgroundColor: config("theme.colors.legBlack"),
          },
          "&disabled": {
            opacity: ".05",
          },
        },
      }
      addComponents(buttons)
    }),
    plugin(function ({ addBase, theme }) {
      addBase({
        h2: {
          fontSize: theme("fontSize.ts5"),
          fontFamily: theme("fontFamily.title-preset-sans"),
          paddingBottom: "1.5rem",
        },

        h3: {
          fontSize: theme("fontSize.ts6"),
          fontFamily: theme("fontFamily.title-preset-sans"),
          paddingBottom: "32px",
          paddingTop: "32px",
        },
        p: {
          fontSize: theme("fontSize.u1"),
          fontFamily: theme("fontFamily.utility-preset"),
        },
        a: {
          fontFamily: theme("fontFamily.utility-preset"),
          textDecorationLine: "underline",
          "&:hover": {
            textDecorationLine: "none",
          },
        },
      })
    }),
  ],
}
