import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { Award, Code, Lightbulb, TrendingUp } from 'lucide-react';
import React from 'react'

const Work = () => {
  const skills = [
		{ icon: <Lightbulb size={24} />, title: 'INNOVATION', desc: 'Solutions créatives' },
		{ icon: <Code size={24} />, title: 'DÉVELOPPEMENT', desc: 'Code de qualité' },
		{ icon: <TrendingUp size={24} />, title: 'PERFORMANCE', desc: 'Résultats mesurables' },
		{ icon: <Award size={24} />, title: 'EXCELLENCE', desc: 'Standards élevés' }
	];
  return (
    <Container sx={{ py: 12 }}>
				<Typography
					variant="overline"
					sx={{
						letterSpacing: '0.2em',
						fontSize: '0.7rem',
						display: 'block',
						textAlign: 'center',
						mb: 2
					}}
				>
					Expériences Professionnelles
				</Typography>

				<Typography
					variant="h2"
					sx={{
						fontWeight: 300,
						textAlign: 'center',
						mb: 8,
						fontSize: { xs: '2.5rem', md: '3.5rem' }
					}}
				>
                    Explorer → Analyser → Raconter
					{/* Faire parler les chiffres (même quand ils ne veulent pas). */}
				</Typography>

				<Divider sx={{ maxWidth: 100, mx: 'auto', mb: 8, borderColor: 'text.primary' }} />

				<Typography
					variant="body1"
					sx={{
						textAlign: 'center',
						maxWidth: '700px',
						mx: 'auto',
						lineHeight: 1.8,
						mb: 8
					}}
				>
					Sed lobortis viverra libero maximus fringilla. Integer malesuada ligula non ullamcorper venenatis. Donec et posuere magna. Proin gravida felis a quam gravida semper. Aliquam fringilla sollicitudin sollicitudin. Aliquam dignissim felis in interdum sagittis. Nullam iaculis quis mi nec iaculis. Phasellus quis sollicitudin tellus, ut accumsan diam.
				</Typography>

				<Grid container spacing={6} sx={{ mb: 8 }}>
					{skills.map((skill, index) => (
						<Grid size={{xs:12, sm:6, md:3}} key={index}>
							<Box sx={{ textAlign: 'center' }}>
								<Box sx={{ mb: 2 }}>
									{skill.icon}
								</Box>
								<Typography variant="overline" sx={{
									fontWeight: 'bold',
									letterSpacing: '0.1em',
									display: 'block',
									mb: 1
								}}>
									{skill.title}
								</Typography>
								<Typography variant="body2" sx={{ color: 'text.secondary' }}>
									{skill.desc}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
  )
}

export default Work
