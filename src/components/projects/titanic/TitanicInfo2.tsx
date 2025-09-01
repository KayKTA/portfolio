import * as React from 'react';
import { Box, Stack, Typography, Chip, Grid } from '@mui/material';
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
							color='primary'
							label="Kaggle"
							size="small"
							sx={{ fontWeight: 'medium' }}
						/>
						<Chip
							color='primary'
							label="Régression logistique"
							size="small"
							sx={{ fontWeight: 'medium' }}
						/>
						<Chip
							color='primary'
							label="Modèle interprétable"
							size="small"
							sx={{ fontWeight: 'medium' }}
						/>
						<Chip
							color='info'
							label="Interface interactive"
							size="small"
							sx={{ fontWeight: 'medium' }}
						/>
					</Stack>
				</Stack>
			}
            datasetDescription={
                <Stack spacing={2.5}>
                    <Box>
                        <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
                            Le dataset Kaggle <em>Titanic</em> contient <strong>891 passagers</strong> avec la variable cible{' '}
                            <Box component="code" sx={{
                                px: 1,
                                py: 0.3,
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                borderRadius: 1,
                                fontSize: '0.875rem',
                                fontWeight: 'bold'
                            }}>
                                Survived
                            </Box> (0/1).
                        </Typography>
                    </Box>

                    <Box sx={{
                        p: 2,
                        bgcolor: 'grey.50',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'grey.200'
                    }}>
                        <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'primary.main' }}>
                            Variables principales :
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{ xs:12, md:6}}>
                                <Typography variant="body2" color="text.secondary">
                                    • <strong>Sex</strong> - Genre du passager<br/>
                                    • <strong>Age</strong> - Âge en années<br/>
                                    • <strong>Pclass</strong> - Classe du billet
                                </Typography>
                            </Grid>
                            <Grid size={{ xs:12, md:6}}>
                                <Typography variant="body2" color="text.secondary">
                                    • <strong>Embarked</strong> - Port d'embarquement<br/>
                                    • <strong>SibSp</strong> - Frères/sœurs/époux<br/>
                                    • <strong>Parch</strong> - Parents/enfants
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1, color: 'success.main' }}>
                            🎯 Variable cible :
                        </Typography>
                        <Box sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            p: 1.5,
                            bgcolor: 'success.light',
                            borderRadius: 2
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
                                ∈ {`{0, 1}`} où <strong>1 = survie</strong>
                            </Typography>
                        </Box>
                    </Box>

                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        <Chip color='secondary' label="Sex" size="small" />
                        <Chip color='secondary' label="age_group" size="small" />
                        <Chip color='secondary' label="Pclass" size="small" />
                        <Chip color='secondary' label="Embarked" size="small" />
                        <Chip color='secondary' label="family" size="small" />
                    </Stack>
                </Stack>
			}
			quickFacts={
				<Stack spacing={2}>
					<TitanicKPI dataUrl={dataUrl} modelUrl={modelUrl} />
				</Stack>
			}
			dataPreparation={
				<Stack spacing={3}>
					<Grid container spacing={3}>
						<Grid size={{ xs:12, md:6}}>
							<Box sx={{
								p: 2,
								border: '2px solid',
								borderColor: 'warning.main',
								borderRadius: 2,
								bgcolor: 'warning.light'
							}}>
								<Typography variant="subtitle2" sx={{
									mb: 1.5,
									color: 'warning.dark',
									display: 'flex',
									alignItems: 'center',
									gap: 1
								}}>
									🧹 Nettoyage des données
								</Typography>
								<Typography variant="body2" color="warning.dark">
									<strong>Embarked</strong> : Imputation par valeur la plus fréquente<br />
									<strong>Age</strong> : Imputation par la médiane
								</Typography>
							</Box>
						</Grid>
						<Grid size={{ xs:12, md:6}}>
							<Box sx={{
								p: 2,
								border: '2px solid',
								borderColor: 'info.main',
								borderRadius: 2,
								bgcolor: 'info.light'
							}}>
								<Typography variant="subtitle2" sx={{
									mb: 1.5,
									color: 'info.dark',
									display: 'flex',
									alignItems: 'center',
									gap: 1
								}}>
									⚙️ Features dérivées
								</Typography>
								<Typography variant="body2" color="info.dark">
									<strong>age_group</strong> : enfant (&lt;15) vs adulte<br />
									<strong>family_size</strong> : SibSp + Parch<br />
									<strong>family</strong> : seul vs avec famille
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Box sx={{
						p: 2.5,
						bgcolor: 'primary.light',
						borderRadius: 2,
						border: '2px solid',
						borderColor: 'primary.main'
					}}>
						<Typography variant="subtitle2" sx={{
							mb: 1,
							color: 'primary.dark',
							display: 'flex',
							alignItems: 'center',
							gap: 1
						}}>
							🔢 Encodage One-Hot
						</Typography>
						<Typography variant="body2" color="primary.dark">
							Utilisation de <code>drop='first'</code> pour définir une <strong>catégorie de référence</strong> par
							variable, évitant la multicolinéarité et facilitant l'interprétation des coefficients.
						</Typography>
					</Box>
				</Stack>
			}
			modelChoice={
				<Stack spacing={2.5}>
					<Box sx={{
						p: 3,
						bgcolor: 'success.light',
						borderRadius: 2,
						border: '2px solid',
						borderColor: 'success.main',
						textAlign: 'center'
					}}>
						<Typography variant="h6" sx={{
							mb: 1,
							color: 'success.dark',
							fontWeight: 'bold'
						}}>
							🎯 Régression Logistique
						</Typography>
						<Typography variant="body1" color="success.dark" sx={{ mb: 2 }}>
							Modèle rapide, stable et parfaitement interprétable pour ce cas d'usage.
						</Typography>
						<Typography variant="body2" color="success.dark" sx={{ fontStyle: 'italic' }}>
							Le JSON exporté contient l'intercept, les coefficients et le schéma complet
							(catégories + références) pour la prédiction.
						</Typography>
					</Box>

					<Grid container spacing={2}>
						<Grid size={{ xs:12, sm:4}}>
							<Box sx={{ textAlign: 'center', p: 2 }}>
								<Box sx={{
									width: 60,
									height: 60,
									bgcolor: 'primary.main',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									margin: '0 auto 8px auto',
									fontSize: '1.5rem'
								}}>
									🔍
								</Box>
								<Chip color='primary' label="Interprétable" size="small" sx={{ fontWeight: 'bold' }} />
							</Box>
						</Grid>
						<Grid size={{ xs:12, sm:4}}>
							<Box sx={{ textAlign: 'center', p: 2 }}>
								<Box sx={{
									width: 60,
									height: 60,
									bgcolor: 'secondary.main',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									margin: '0 auto 8px auto',
									fontSize: '1.5rem'
								}}>
									⚡
								</Box>
								<Chip color='secondary' label="Rapide" size="small" sx={{ fontWeight: 'bold' }} />
							</Box>
						</Grid>
						<Grid size={{ xs:12, sm:4}}>
							<Box sx={{ textAlign: 'center', p: 2 }}>
								<Box sx={{
									width: 60,
									height: 60,
									bgcolor: 'info.main',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									margin: '0 auto 8px auto',
									fontSize: '1.5rem'
								}}>
									🌍
								</Box>
								<Chip color='info' label="Généralisable" size="small" sx={{ fontWeight: 'bold' }} />
							</Box>
						</Grid>
					</Grid>
				</Stack>
			}
			insights={
				<Stack spacing={2.5}>
					<Box sx={{
						p: 2.5,
						bgcolor: 'error.light',
						borderRadius: 2,
						borderLeft: '4px solid',
						borderColor: 'error.main'
					}}>
						<Typography variant="body1" color="error.dark" sx={{
							display: 'flex',
							alignItems: 'flex-start',
							gap: 1,
							mb: 1
						}}>
							<Box component="span" sx={{ fontSize: '1.2rem' }}>⚠️</Box>
							<Box>
								<strong>Facteurs de risque dominants :</strong> La 3ème classe et le fait d'être un homme
								réduisent drastiquement la probabilité de survie.
							</Box>
						</Typography>
					</Box>

					<Box sx={{
						p: 2.5,
						bgcolor: 'success.light',
						borderRadius: 2,
						borderLeft: '4px solid',
						borderColor: 'success.main'
					}}>
						<Typography variant="body1" color="success.dark" sx={{
							display: 'flex',
							alignItems: 'flex-start',
							gap: 1,
							mb: 1
						}}>
							<Box component="span" sx={{ fontSize: '1.2rem' }}>👶</Box>
							<Box>
								<strong>Avantage de l'âge :</strong> Les enfants ont significativement de meilleures
								chances de survie que les adultes, toutes choses égales par ailleurs.
							</Box>
						</Typography>
					</Box>

					<Box sx={{
						p: 2.5,
						bgcolor: 'info.light',
						borderRadius: 2,
						borderLeft: '4px solid',
						borderColor: 'info.main'
					}}>
						<Typography variant="body1" color="info.dark" sx={{
							display: 'flex',
							alignItems: 'flex-start',
							gap: 1,
							mb: 1
						}}>
							<Box component="span" sx={{ fontSize: '1.2rem' }}>🎮</Box>
							<Box>
								<strong>Prédiction universelle :</strong> Le modèle peut estimer la survie pour
								n'importe quel profil, même jamais observé dans le dataset (idéal pour le mode interactif).
							</Box>
						</Typography>
					</Box>

					<Box sx={{
						textAlign: 'center',
						pt: 2,
						borderTop: '1px solid',
						borderColor: 'divider'
					}}>
						<Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
							Modèle entraîné sur 891 passagers avec validation croisée
						</Typography>
					</Box>
				</Stack>
			}
		/>
	);
}
