import { Box, Button, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import { BarChart3, ChevronRight, Code, Database } from 'lucide-react';

const Projects = () => {
	const services = [
		{
			id: '01',
			title: 'Data Science',
			subtitle: 'Machine Learning & Analytics',
			description: 'Extraction d\'insights, modèles prédictifs et analyse de données pour optimiser vos décisions business.',
			icon: <BarChart3 size={32} />
		},
		{
			id: '02',
			title: 'Développement Web',
			subtitle: 'Applications Modernes',
			description: 'Création d\'applications web performantes avec React, Node.js et les technologies les plus récentes.',
			icon: <Code size={32} />
		},
		{
			id: '03',
			title: 'Data Engineering',
			subtitle: 'Architecture & Pipeline',
			description: 'Infrastructure de données scalable, pipelines ETL et solutions cloud pour vos besoins data.',
			icon: <Database size={32} />
		}
	];
	return (
		<Container sx={{ py: 12 }}>
				<Typography
					variant="h2"
					sx={{
						fontWeight: 300,
						textAlign: 'center',
						mb: 2,
						color: 'text.primary',
						fontSize: { xs: '2.5rem', md: '3rem' }
					}}
				>
					PROJETS RÉCENTS
				</Typography>

				<Typography
					variant="body1"
					sx={{
						textAlign: 'center',
						color: 'text.secondary',
						mb: 8
					}}
				>
					Une sélection de mes travaux les plus récents
				</Typography>

				<Divider sx={{ maxWidth: 100, mx: 'auto', mb: 8, borderColor: 'text.primary' }} />

				<Grid container spacing={3}>
					{services.map((service, index) => (
						<Grid size={{xs:12, md:4}} key={service.id}>
							<Card
								elevation={0}
								sx={{
									// height: '400px',
									borderRadius: 0,
									border: '1px solid #f0f0f0',
									cursor: 'pointer',
									transition: 'all 0.3s ease',
									'&:hover': {
										backgroundColor: '#fafafa'
									}
								}}
							>
								<CardContent sx={{
									p: 6,
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									textAlign: 'center'
								}}>
									<Typography
										variant="h6"
										sx={{
											color: 'secondary.main',
											fontSize: '3rem',
											fontWeight: 300,
											mb: 3
										}}
									>
										{service.id}
									</Typography>

									<Box sx={{ mb: 3, color: 'text.primary' }}>
										{service.icon}
									</Box>

									<Typography
										variant="overline"
										sx={{
											fontWeight: 'bold',
											letterSpacing: '0.1em',
											color: 'text.primary',
											mb: 2
										}}
									>
										{service.title}
									</Typography>

									<Typography variant="body2" sx={{
										color: 'text.secondary',
										mb: 3,
										fontSize: '0.8rem',
										textTransform: 'uppercase',
										letterSpacing: '0.05em'
									}}>
										{service.subtitle}
									</Typography>

									<Typography variant="body2" sx={{
										color: 'text.secondary',
										lineHeight: 1.6,
										flex: 1
									}}>
										{service.description}
									</Typography>

									<Button
										size="small"
										sx={{
											color: 'text.primary',
											textTransform: 'uppercase',
											fontSize: '0.7rem',
											mt: 2
										}}
										endIcon={<ChevronRight size={16} />}
									>
										En savoir plus
									</Button>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
	)
}

export default Projects
