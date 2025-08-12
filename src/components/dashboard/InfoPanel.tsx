import { Box, Typography, Paper } from '@mui/material';
import type { Project } from '../projects/projects';
import TitanicInfo from '../projects/titanic/TitanicInfo';

export default function InfoPanel({ project }: { project: Project }) {
	if (project.id === 'titanic') {
		return <TitanicInfo dataUrl={project.dataUrl} modelUrl={project.modelUrl} />;
	}
	return (
		<Paper variant="outlined" sx={{ p: 2,  }}>
			<Box sx={{ display: 'grid', gap: 1 }}>
				<Typography variant="subtitle1">À propos</Typography>
				<Typography variant="body2" color="text.secondary">{project.info ?? '—'}</Typography>
				<Typography variant="subtitle2" sx={{ mt: 2 }}>Fichiers</Typography>
				<Typography variant="body2" color="text.secondary">
				Modèle : {project.modelUrl ?? '—'}<br />
				Dataset : {project.dataUrl ?? '—'}
				</Typography>
			</Box>
		</Paper>
	);
}
