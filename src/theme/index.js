/* eslint-disable import/no-anonymous-default-export */
export default {
  // example colors with dark mode
  colors: {
    white: "#fff",
    text: "#EDECEC", // body color and primary color
    text_secondary: "#9D9D9D", // secondary body color
    background: "#252F33", // body background color
    background_secondary: "#2A393F", // secondary background color
    border_color: "#4D5B69", // border color
    primary: "#12FDC4", // primary button and link color
    secondary: "#FCA311", // secondary color - can be used for hover states
  },

  breakpoints: [
    "480px",
    "640px",
    "768px",
    "1024px",
    "1220px",
    "1366px",
    "1620px",
  ],
  fonts: {
    Cairo: "'Cairo', sans-serif",
    Quantico: "'Quantico', sans-serif",
    Roboto: "'Roboto', sans-serif",
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: [
        "100%",
        null,
        null,
        "780px",
        "1020px",
        "1200px",
        null,
        "1310px",
      ],
      px: [4, 6],
    },
    header: {
      color: "#02073E",
      fontWeight: "normal",
      py: 3,
      position: "absolute",
      width: "100%",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    main: {},
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ["90px", null, 9, null, null, 10, null, "165px"],
    },
    experience: {
      pt: [4, null, 5, null, null, 6],
      pb: [8, null, 9, null, null, 10, null, "170px"],
      backgroundColor: "#252F33",
      position: "relative",
      zIndex: 2,
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
      overflow: "hidden",
    },
    testimonial: {
      pt: [8, null, 8, "70px", null, 8, null, "145px"],
      pb: ["90px", null, 9, null, null, 10, null, "190px"],
      overflow: "hidden",
      backgroundColor: "#252F33",
      position: "relative",
      zIndex: 2,
    },
    services: {
      pb: ["90px", null, 9, null, null, 10, null, "150px"],
    },
    projects: {
      pt: [8, null, 9, null, null, 10, null, "180px"],
      pb: ["90px", null, 9, null, null, 10, null, "180px"],
    },
  },

  text: {
    paragraph: {
      Roboto: "'Roboto', sans-serif",
      fontWeight: "400",
      fontSize: ["18px", "20px", "24px"],
      color: "text",
    },
    heroPrimary: {
      fontFamily: "'Cairo', sans-serif",
      fontWeight: "Bold",
      fontSize: ["40px", "60px", "70px", "80px", "120px"],
      lineHeight: [1.3, null, null, null, null, 1.2],
      mb: [4, null, null, null, null, 5],
    },

    heroSecondary: {
      fontSize: ["24px", null, "28px", null, null, "32px", null, "40px"],
      fontFamily: "'Quantico', sans-serif",
      fontWeight: "Bold",
      fontStyle: "normal",
      color: "white",
      lineHeight: [1.3, null, null, 1.25],
      textAlign: "center",

      "& > span": {
        marginLeft: "20px",
        color: "#12FDC4",
        textShadow: "glow",
      },
    },
  },
  links: {
    default: {
      fontSize: "18px",
      color: "text",
      cursor: "pointer",
    },

    nav: {
      fontFamily: "'Roboto', sans-serif",
      display: ["none", null, "inline-block"],
      px: 25,
      fontWeight: "normal",
      hover: {
        color: "white",
      },
      "&.active": {
        color: "white",
        fontWeight: "700",
      },

      "&.unSticky": {
        color: "background",

        "&.active": {
          color: "#000",
          fontWeight: "700",
        },
        "&:hover": {
          color: "#000",
          fontWeight: "500",
        },
      },
    },
  },

  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, "none"],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      // minWidth: "190px",
      borderRadius: "10px",
      fontSize: ["14px", null, null, 2],
      letterSpacings: "-0.15px",
      padding: ["12px 20px", null, "15px 30px"],
      fontFamily: "Roboto",
      fontWeight: "700",
      cursor: "pointer",
      lineHeight: 1.2,
      transition: "all 0.25s",
      "&:focus": {
        outline: 0,
      },
    },
    primary: {
      variant: "buttons.defaultBtn",
      color: "background_secondary",
      bg: "white",
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 12px 24px -10px",
      },

      "&.sticky": { background: "background", color: "white" },
    },

    secondary: {
      variant: "buttons.defaultBtn",
      fontWeight: "400",
      color: "white",
      bg: "transparent",
      padding: ["10px 15px", null, "15px 30px"],

      "&.sticky": { color: "background" },
    },
    textButton: {
      variant: "buttons.defaultBtn",
      backgroundColor: "transparent",
      cursor: "pointer",
      color: "white",
      svg: {
        fontSize: [4, 6],
        mr: 2,
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
    },
    offer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: ["1 1 calc(50% - 16px)", "1 1 20%"],
      minHeight: 130,
      m: 2,
      background: "#FFFFFF",
      border: "1px solid #EDEFF6",
      borderRadius: 5,
    },
    featureCard: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "row",
      p: 3,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderRadius: 8,
      borderColor: "border_color",
      height: 60,
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "400",
      fontSize: ["18px", "20px", "24px"],
      color: "text",
      fontSmoothing: "antialiased",

      // Modal Global Style
    },

    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7",
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: "none",
    },
    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important",
    },
  },
};
