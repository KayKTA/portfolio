import * as React from 'react';
import { Box, Paper, Typography, Container, Divider } from '@mui/material';

interface InfoSection {
    title: string;
    content: React.ReactNode;
    icon: string;
}

interface InfoPanelTemplateProps {
    presentation: React.ReactNode;
    datasetDescription: React.ReactNode;
    quickFacts: React.ReactNode;
    dataPreparation: React.ReactNode;
    modelChoice: React.ReactNode;
    insights: React.ReactNode;
}

export default function InfoPanelTemplate({
	presentation,
	datasetDescription,
	quickFacts,
	dataPreparation,
	modelChoice,
	insights,
}: InfoPanelTemplateProps) {
	const sections: InfoSection[] = [
		{ title: 'Présentation', content: presentation, icon: '📕' },
		{ title: 'Dataset', content: datasetDescription, icon: '📊' },
		{ title: 'Métriques', content: quickFacts, icon: '📈' },
		{ title: 'Préparation', content: dataPreparation, icon: '🔬' },
		{ title: 'Modèle', content: modelChoice, icon: '🎯' },
		{ title: 'Insights', content: insights, icon: '💡' },
	];

	return (
		<Container maxWidth="lg" sx={{ py: 3 }}>
            {/* Grid layout pour les sections */}
			<Box sx={{
				// display: 'grid',
				gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
				gap: 3,
				mb: 4
			}}>
				{sections.map((section, idx) => (
					<Box
						key={idx}
						// elevation={0}
						sx={{
							p: 3,
							borderRadius: 3,
							// border: '1px solid',
							// borderColor: 'divider',
							position: 'relative',
							transition: 'all 0.3s ease',
							// '&:hover': {
							// 	transform: 'translateY(-4px)',
							// 	boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
							// 	borderColor: 'primary.main',
							// },
							// background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
						}}
					>
						{/* Icône et titre */}
						<Box sx={{
							display: 'flex',
							alignItems: 'center',
							mb: 2,
							gap: 1.5
						}}>
							<Box sx={{
								width: 40,
								height: 40,
								// borderRadius: 2,
								// bgcolor: 'primary.main',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '1.2rem',
								flexShrink: 0
							}}>
								{section.icon}
							</Box>
							<Typography variant="h6" sx={{
								fontWeight: 'bold',
								color: 'text.primary',
								flex: 1
							}}>
								{section.title}
							</Typography>
						</Box>

						{/* Séparateur décoratif */}
						<Box sx={{
							width: 30,
							height: 2,
							bgcolor: 'primary.main',
							borderRadius: 1.5,
							mb: 2
						}} />

						{/* Contenu */}
						<Box sx={{
							'& .MuiTypography-root': {
								lineHeight: 1.6,
							},
							'& .MuiChip-root': {
								borderRadius: 2,
								fontWeight: 'medium',
							}
						}}>
							{section.content}
						</Box>

						{/* Décoration d'angle */}
						{/* <Box sx={{
							position: 'absolute',
							top: 0,
							right: 0,
							width: 20,
							height: 20,
							borderTopRightRadius: 12,
							background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
							opacity: 0.1
						}} /> */}
					</Box>
				))}
			</Box>

			{/* Footer décoratif
			<Box sx={{
				textAlign: 'center',
				pt: 4,
				borderTop: '1px solid',
				borderColor: 'divider',
				position: 'relative'
			}}>
				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2,
					mb: 2
				}}>
					<Box sx={{ flex: 1, height: 1, bgcolor: 'divider' }} />
					<Box sx={{
						px: 2,
						py: 0.5,
						bgcolor: 'info.main',
						color: 'info.contrastText',
						borderRadius: 1,
						fontSize: '0.75rem',
						fontWeight: 'medium'
					}}>
						Data Science Dashboard
					</Box>
					<Box sx={{ flex: 1, height: 1, bgcolor: 'divider' }} />
				</Box>
				<Typography variant="caption" color="text.secondary">
					Interface interactive pour l'exploration de modèles ML
				</Typography>
			</Box> */}
		</Container>
	);
}
