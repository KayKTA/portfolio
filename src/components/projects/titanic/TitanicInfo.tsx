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
			presentation={
				<Stack spacing={1.5}>
					<Typography variant="body2" color="text.secondary">
						Projet interactif qui estime la probabilité de survie d’un passager du Titanic à partir de quelques
						caractéristiques simples (sexe, âge, classe, port d’embarquement, famille). Inspiré du célèbre
						dataset Kaggle, il allie analyse exploratoire et jeu interactif.
					</Typography>
					<Stack direction="row" spacing={1} flexWrap="wrap">
						<Chip color='primary' label="Kaggle" size="small" />
						<Chip color='primary' label="Régression logistique" size="small" />
						<Chip color='primary' label="Modèle interprétable" size="small" />
						{/* <Chip color='primary' label="Interface réutilisable" size="small" /> */}
					</Stack>
				</Stack>
			}
            datasetDescription={
                <Stack spacing={1.5}>
                    <Typography variant="body2" color="text.secondary">
                        Le dataset Kaggle <em>Titanic</em> contient <strong>891</strong> passagers avec la cible{' '}
                        <code>Survived</code> (0/1).
                    </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Les variables brutes incluent : <code>Sex</code>, <code>Age</code>,{' '}
                        <code>Pclass</code>, <code>Embarked</code>, <code>SibSp</code> <em>(Siblings / Spouse)</em>,{' '}
                        <code>Parch</code> <em>(Parent / Children)</em>, <code>Fare</code>,{' '}
                        etc.
                    </Typography>

                    <Grid container spacing={1.5}>
                        <Grid size={{ xs: 12 }}>
                        <Typography variant="subtitle2">Cible: </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <code>Survived</code> ∈ {`{0, 1}`} : 1 signifie que la personne a survécu.
                        </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="subtitle2">Variables clés utilisées</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 0.5 }}>
                            <Chip color='primary' label="Sex" size="small" />
                            <Chip color='primary' label="age_group" size="small" />
                            <Chip color='primary' label="Pclass" size="small" />
                            <Chip color='primary' label="Embarked" size="small" />
                            <Chip color='primary' label="family" size="small" />
                        </Stack>
                        </Grid>
                    </Grid>
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
						<Typography variant="body2" color="text.secondary">
							• <strong>Embarked</strong> : imputation <code>most_frequent</code> (SimpleImputer)
							<br />
							• <strong>Age</strong> : imputation <code>median</code>
						</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
						<Typography variant="subtitle2">Features dérivées</Typography>
						<Typography variant="body2" color="text.secondary">
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
						<Typography variant="body2" color="text.secondary">
						One-Hot avec <code>drop='first'</code> pour définir une <strong>catégorie de référence</strong> par
						variable (évite la multicolinéarité et facilite l’interprétation des coefficients).
						</Typography>
					</Stack>
				</Stack>
			}
			modelChoice={
				<Stack spacing={1.25}>
					<Typography variant="body2" color="text.secondary">
						On choisit une <strong>régression logistique</strong> : rapide, stable et interprétable.
						<br />
						Le JSON exporté contient l’<em>intercept</em>, les <em>coefficients</em> et le <em>schema</em> (catégories + références).
					</Typography>

					<Stack direction="row" spacing={1} flexWrap="wrap">
						<Chip color='primary' label="Interprétable" size="small" />
						<Chip color='primary' label="Peu de features" size="small" />
						<Chip color='primary' label="Généralisable" size="small" />
					</Stack>
				</Stack>
			}
			insights={
				<Stack spacing={0.75}>
					<Typography variant="body2" color="text.secondary">
						• <strong>Pclass</strong> et <strong>Sex</strong> dominent l’explication : la 3ᵉ classe et le fait d’être
						un homme réduisent fortement la probabilité de survie.
					</Typography>
					<Typography variant="body2" color="text.secondary">
						• Les <strong>enfants</strong> ont de meilleures chances que les adultes, toutes choses égales par ailleurs.
					</Typography>
					<Typography variant="body2" color="text.secondary">
						• Le modèle permet de <strong>prédire n’importe quel profil</strong>, même jamais observé dans le dataset
						(utile pour le mode “Jeu”).
					</Typography>
				</Stack>
			}
		/>
	);
}
