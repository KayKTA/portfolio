import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
	{ label: 'À propos', href: '#about', to: '/about' },
	{ label: 'Projets', href: '#projects', to: '/projects' },
	{ label: 'Data Analyse', href: '#data', to: '/data' },
];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  	const drawer = (
		<Box onClick={() => setMobileOpen(false)} sx={{ textAlign: 'center' }}>
		<Typography variant="h6" sx={{ my: 2 }}>
			Kay
		</Typography>
		<List>
			{navItems.map((item) => (
			<ListItem key={item.label} disablePadding>
				<ListItemButton component="a" href={item.href}>
				<ListItemText primary={item.label} />
				</ListItemButton>
			</ListItem>
			))}
		</List>
		</Box>
  	);

  	return (
		<AppBar position="fixed" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				{/* Logo / Titre */}
				<Typography variant="h6" component="a" href="#" sx={{ textDecoration: 'none', color: 'inherit' }}>
					Kay
				</Typography>

				{/* Mobile menu */}
				{isMobile ? (
				<>
					<IconButton color="inherit" edge="end" onClick={() => setMobileOpen(true)}>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor="left"
						open={mobileOpen}
						onClose={() => setMobileOpen(false)}
						sx={{
							'& .MuiDrawer-paper': {
							bgcolor: 'background.default',
							color: 'text.primary',
							},
						}}
					>
						{drawer}
					</Drawer>
				</>
				) : (
				// Desktop nav links
					<Box>
						{navItems.map((item) => (
							<Button
								key={item.label}
								href={item.href}
								color="inherit"
								sx={{
									fontWeight: 500,
									textTransform: 'none',
									mx: 1,
								}}
								component={RouterLink}
								to={item.to}
							>
								{item.label}
							</Button>
						))}
					</Box>
				)}
			</Toolbar>
		</AppBar>
  	);
}
