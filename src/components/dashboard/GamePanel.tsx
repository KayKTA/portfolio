import * as React from 'react';
import { useEffect, useState } from 'react';
import { Typography, CircularProgress, Paper } from '@mui/material';
import LogitPredictor from '../logit/LogitPredictor';
import type { LogitModel } from '../../lib/logit/predict';
import TitanicGame from '../projects/titanic/TitanicGame';
import { Project } from '../projects/projects';
import MoodifyGame from '../projects/moodify/MoodifyGame';

export default function GamePanel({ project, title }: { project: Project; title?: string }) {
	const [model, setModel] = useState<LogitModel | null>(null);
	const [loading, setLoading] = useState(false);

	return (
		// <Paper variant="outlined" sx={{ p: 2 }}>
		// <LogitPredictor
		// 	model={model}
		// 	title={title ?? 'Prédicteur'}
		// 	defaultInput={defaultInput}
		// />
      project.id == 'moodify' ?
        <MoodifyGame modelUrl={project.modelUrl} />
      :
			  <TitanicGame modelUrl={project.modelUrl} />
		// </Paper>
	);
}
