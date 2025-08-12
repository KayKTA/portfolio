import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
    primary: {
      main: "#201d39", // Velvet Plum
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#a79dda", // Misty Violet
      contrastText: "#201d39",
    },
    warning: {
      main: "#e58500", // Amber Glow
      contrastText: "#ffffff",
    },
    info: {
      main: "#514575", // Purple Gray
      contrastText: "#ffffff",
    },
    success: {
      main: "#ffc451", // Glitter Honey
      contrastText: "#201d39",
    },
    background: {
      default: "#fdfdfd",
      paper: "#ffffff",
    },
    text: {
      primary: "#201d39",
      secondary: "#514575",
    },
  },

	typography: {
		fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
		h1: { fontWeight: 700, fontSize: '2.4rem' },
		h2: { fontWeight: 600, fontSize: '1.8rem' },
		h5: { fontWeight: 600, fontSize: '1.4rem' },
		body1: { fontSize: '1rem' },
		body2: { fontSize: '0.9rem' },
	},

	shape: {
		borderRadius: 8,
	},

	components: {
		MuiButton: {
      styleOverrides: {
        root: {
          // borderRadius: 9999,
          textTransform: 'none',
        },
      },
		},
		MuiPaper: {
			styleOverrides: {
				root: {
				  borderRadius: 8,
				},
			},
		},
	},
});

export default theme;
