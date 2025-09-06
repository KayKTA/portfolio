import { createTheme } from '@mui/material';

const colors = {
  paperLight:  '#FFF7DC',
  paperDeep:   '#FFE7A1',
  ink:         '#2A1500',
  accentRed:   '#AE2B1F',
  grid:        '#C27C2A',
};

const theme = createTheme({
    palette: {
        mode: 'light',
        primary:   { main: colors.accentRed },
        secondary: { main: '#FFD34E' },
        background:{ default: colors.paperLight, paper: colors.paperLight },
        text:      { primary: colors.ink, secondary: '#5D3B00' },
        divider:   '#D7B874',
    },
    //   shape: { borderRadius: 20 },
    typography: {
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
        h1: { fontFamily: "'Bebas Neue', Inter", fontWeight: 400, letterSpacing: 1 },
        h2: { fontFamily: "'Bebas Neue', Inter", fontWeight: 400, letterSpacing: .5 },
        h3: { fontFamily: "'Bebas Neue', Inter", fontWeight: 400 },
    },
});

export default theme;
export { colors };
