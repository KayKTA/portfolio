import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';

interface InfoSection {
    title: string;
    content: React.ReactNode;
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
		{ title: '📕 Présentation', content: presentation },
		{ title: '📊 De quoi parle ce dataset ?', content: datasetDescription },
		{ title: '🤓 Ce que l’on sait', content: quickFacts },
		{ title: '🔬 Préparation des données', content: dataPreparation },
		{ title: '🎯 Choix du modèle', content: modelChoice },
		{ title: '💡 Ce qu’on apprend', content: insights },
	];

	return (
		<Box sx={{ display: 'grid', gap: 2 }}>
			{sections.map((section, idx) => (
				<Paper
					key={idx}
					variant="outlined"
					sx={{ p: 2}}
				>
					<Typography variant="h5" sx={{ mb: 1 }}>
						{section.title}
					</Typography>
					<Box>{section.content}</Box>
				</Paper>
			))}
		</Box>
	);
}
