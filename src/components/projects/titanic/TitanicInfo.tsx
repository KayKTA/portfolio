import * as React from 'react';
import { Box, Stack, Typography, Chip, Grid, Divider } from '@mui/material';
import InfoPanelTemplate from '../../dashboard/InfoPanelTemplate';
import TitanicKPI from './TitanicKPI';

export default function TitanicInfo({
    dataUrl = '/data/train.csv',
    modelUrl = '/data/titanic_model.json',
}: {
    dataUrl?: string;
    modelUrl?: string;
}) {
	return (
		<InfoPanelTemplate
			// presentation={
			// 	<Stack spacing={1.5}>
			// 		<Typography variant="body2" color="info.main">
			// 			Projet interactif qui estime la probabilité de survie d’un passager du Titanic à partir de quelques
			// 			caractéristiques simples (sexe, âge, classe, port d’embarquement, famille). Inspiré du célèbre
			// 			dataset Kaggle, il allie analyse exploratoire et jeu interactif.
			// 		</Typography>
			// 		<Stack direction="row" spacing={1} flexWrap="wrap">
			// 			<Chip color='primary' label="Kaggle" size="medium" />
			// 			<Chip color='primary' label="Régression logistique" size="medium" />
			// 			<Chip color='primary' label="Modèle interprétable" size="medium" />
			// 			{/* <Chip color='primary' label="Interface réutilisable" size="medium" /> */}
			// 		</Stack>
			// 	</Stack>
			// }
            presentation={
                <Stack spacing={2}>
                    <Typography variant="body1" color="text.primary" sx={{
                        lineHeight: 1.7,
                        fontSize: '1rem'
                    }}>
                        Projet interactif qui estime la probabilité de survie d'un passager du Titanic à partir de quelques
                        caractéristiques simples (sexe, âge, classe, port d'embarquement, famille).
                    </Typography>
                    <Typography variant="body2" color="info.main" sx={{
                        fontStyle: 'italic',
                        pl: 2,
                        borderLeft: '3px solid',
                        borderColor: 'info.main'
                    }}>
                        Inspiré du célèbre dataset Kaggle, il allie analyse exploratoire et modélisation interactive.
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ pt: 1 }}>
                        <Chip
                            color='info'
                            label="Kaggle"
                            size="medium"
                            sx={{ fontWeight: 'medium' }}
                        />
                        <Chip
                            color='info'
                            label="Régression logistique"
                            size="medium"
                            sx={{ fontWeight: 'medium' }}
                        />
                        <Chip
                            color='info'
                            label="Modèle interprétable"
                            size="medium"
                            sx={{ fontWeight: 'medium' }}
                        />
                        <Chip
                            color='info'
                            label="Interface interactive"
                            size="medium"
                            sx={{ fontWeight: 'medium' }}
                        />
                    </Stack>
                </Stack>
            }
            datasetDescription={
                <Stack spacing={2.5}>
                    <Box>
                        <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
                            Le dataset Kaggle <em>Titanic</em> contient <strong>891 passagers</strong>.
                            {/* avec la variable cible{' '}
                            <Box component="code" sx={{
                                px: 1.5,
                                py: 0.5,
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                borderRadius: 1,
                                fontSize: '0.875rem',
                                fontWeight: 'bold'
                            }}>
                                Survived
                            </Box> (0/1). */}
                        </Typography>
                    </Box>

                    <Box sx={{
                        p: 2,
                        bgcolor: 'grey.50',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'grey.200'
                    }}>
                        <Typography variant="body1" sx={{ mb: 1.5, color: 'primary.main' }}>
                            Variables principales :
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{ xs:12, md:6}}>
                                <Typography variant="body2" color="info.main">
                                    • <strong>Sex</strong> - Genre du passager<br/>
                                    • <strong>Age</strong> - Âge en années<br/>
                                    • <strong>Pclass</strong> - Classe du billet
                                </Typography>
                            </Grid>
                            <Grid size={{ xs:12, md:6}}>
                                <Typography variant="body2" color="info.main">
                                    • <strong>Embarked</strong> - Port d'embarquement<br/>
                                    • <strong>SibSp</strong> - Frères/sœurs/époux<br/>
                                    • <strong>Parch</strong> - Parents/enfants
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Typography variant="body1" sx={{ mb: 1, color: 'success.main' }}>
                            🎯 <strong>Variable cible :</strong>
                        </Typography>
                        <Box sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            p: 1.5,
                            bgcolor: 'success.light',
                            borderRadius: 50,
                            // width: '100%'
                        }}>
                            <Box component="code" sx={{
                                px: 1,
                                py: 0.3,
                                bgcolor: 'success.main',
                                color: 'success.contrastText',
                                borderRadius: 1,
                                fontSize: '0.875rem',
                                fontWeight: 'bold'
                            }}>
                                Survived
                            </Box>
                            <Typography variant="body2" color="success.dark">
                                ∈ {`{0, 1}`} où <strong>1 signifie que la personne a survécu</strong>
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
			}
			quickFacts={
				<Stack spacing={1.5}>
					<TitanicKPI dataUrl={dataUrl} modelUrl={modelUrl} />
				</Stack>
			}
			dataPreparation={
				<Stack spacing={1.5}>
					<Grid container spacing={1.5}>
						<Grid size={{ xs: 12, md: 6 }}>
						<Typography variant="subtitle2">Nettoyage</Typography>
						<Typography variant="body2" color="info.main">
							• <strong>Embarked</strong> : imputation <code>most_frequent</code> (SimpleImputer)
							<br />
							• <strong>Age</strong> : imputation <code>median</code>
						</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
						<Typography variant="subtitle2">Features dérivées</Typography>
						<Typography variant="body2" color="info.main">
							• <strong>age_group</strong> : <code>child</code> si Age &lt; 15, sinon <code>adult</code>
							<br />
							• <strong>family_size</strong> : <code>SibSp</code> + <code>Parch</code>
							<br />
							• <strong>family</strong> : <code>with_family</code> / <code>alone</code>
						</Typography>
						</Grid>
					</Grid>
					<Divider />
					<Stack spacing={0.5}>
						<Typography variant="subtitle2">Encodage</Typography>
						<Typography variant="body2" color="info.main">
						One-Hot avec <code>drop='first'</code> pour définir une <strong>catégorie de référence</strong> par
						variable (évite la multicolinéarité et facilite l’interprétation des coefficients).
						</Typography>
					</Stack>
				</Stack>
			}
			modelChoice={
                <Box>
                    <Stack spacing={1.25}>
                        <Typography variant="body2" color="info.main">
                            On choisit une <strong>régression logistique</strong> : rapide, stable et interprétable.
                            <br />
                            Le JSON exporté contient l’<em>intercept</em>, les <em>coefficients</em> et le <em>schema</em> complet (catégories + références) pour la prédiction.
                        </Typography>

                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Chip color='info' label="Interprétable" size="medium" />
                            <Chip color='info' label="Rapide" size="medium" />
                            <Chip color='info' label="Généralisable" size="medium" />
                        </Stack>
                    </Stack>
                </Box>
			}
			insights={
				<Stack spacing={0.75}>
					<Typography variant="body2" color="info.main">
						• <strong>Pclass</strong> et <strong>Sex</strong> dominent l’explication : la 3ᵉ classe et le fait d’être
						un homme réduisent fortement la probabilité de survie.
					</Typography>
					<Typography variant="body2" color="info.main">
						• Les <strong>enfants</strong> ont de meilleures chances que les adultes, toutes choses égales par ailleurs.
					</Typography>
					<Typography variant="body2" color="info.main">
						• Le modèle permet de <strong>prédire n’importe quel profil</strong>, même jamais observé dans le dataset
						(utile pour le mode “Jeu”).
					</Typography>
				</Stack>
			}
		/>
	);
}
