import { alpha, AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
	return(
		<AppBar
				position="fixed"
				elevation={0}
				sx={{
					backgroundColor: alpha('#ffffff', 0.95),
					backdropFilter: 'blur(10px)',
					borderRadius: 0,
					borderBottom: '1px solid #f0f0f0',
					color: 'text.primary'
				}}
			>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
						Portfolio
					</Typography>
					<Box sx={{ display: 'flex', gap: 3 }}>
						<Button sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.8rem' }}>
							Accueil
						</Button>
						<Button sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.8rem' }}>
							Portfolio
						</Button>
						<Button sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.8rem' }}>
							À propos
						</Button>
						<Button sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.8rem' }}>
							Contact
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
	)
};
