import { Container, Box, Typography } from '@mui/material';
import Navbar from './Navbar';

type Props = {
	pageTitle?: string,
	subtitle?: string,
		children: React.ReactNode;
};

export default function Layout({ children, pageTitle, subtitle }: Props) {
	return (
        <Box
            className='grid-background-dots'
            sx={{
                minHeight: '100vh',
                // backgroundColor: 'primary.main',
                // color: 'text.secondary',
                color: 'info.main',
            }}
        >
            <Navbar />
            <Container maxWidth="xl">
                <Box pt={10}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {pageTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="h4" gutterBottom>
                        {subtitle}
                    </Typography>
                    {children}
                </Box>
            </Container>
        </Box>
	);
}
