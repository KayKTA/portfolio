import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#201d39", contrastText: "#fff" },    // Velvet Plum
        secondary:{ main: "#a79dda", contrastText: "#201d39" },// Misty Violet
        warning:  { main: "#e58500", contrastText: "#fff" },    // Amber Glow
        success:  { main: "#ffc451", contrastText: "#201d39" }, // Glitter Honey
        info:     { main: "#514575", contrastText: "#fff" },    // Purple Gray
        background: {
          default: "#f7f6fb",    // léger violet très pâle
          paper:   "#ffffff",
        },
        text: {
          primary: "#201d39",
          secondary:"#b5acd3ff",
        //   secondary:"#514575",
        },
    },
    shape: { borderRadius: 8 },
    components: {
        MuiPaper: { styleOverrides: { root: { borderRadius: 8 } } },
        MuiCard:  { styleOverrides: { root: { borderRadius: 8 } } },
        MuiTab:   { styleOverrides: { root: { textTransform: "none", fontWeight: 600 } } },
    },
});

export default theme;
