import { Box, Typography, Paper } from '@mui/material';
import type { Project } from '../projects/projects';
import TitanicInfo from '../projects/titanic/TitanicInfo';
import MoodifyInfo from '../projects/moodify/MoodifyInfo';

export default function InfoPanel({ project }: { project: Project }) {
	if (project.id === 'titanic') {
		return <TitanicInfo dataUrl={project.dataUrl} modelUrl={project.modelUrl} />;
	} else if (project.id === 'moodify') {
		return <MoodifyInfo dataUrl={project.dataUrl} />;
	}
	return (
		<Paper variant="outlined" sx={{ p: 2,  }}>
			<Box sx={{ display: 'grid', gap: 1 }}>
				<Typography variant="subtitle1">À propos</Typography>
				<Typography variant="body2" color="info.main">{project.info ?? '—'}</Typography>
				<Typography variant="subtitle2" sx={{ mt: 2 }}>Fichiers</Typography>
				<Typography variant="body2" color="info.main">
				Modèle : {project.modelUrl ?? '—'}<br />
				Dataset : {project.dataUrl ?? '—'}
				</Typography>
			</Box>
		</Paper>
	);
}
