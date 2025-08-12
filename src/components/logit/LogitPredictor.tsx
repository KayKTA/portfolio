import * as React from 'react';
import { useState, useMemo } from 'react';
import { Box, Stack, FormControl, InputLabel, Select, MenuItem, Button, Typography, Paper } from '@mui/material';
import { Gauge } from '@mui/x-charts';
import { LogitModel, predictProbability, UserInput } from '../../lib/logit/predict';

interface LogitPredictorProps {
    model: LogitModel;
    title?: string;
    defaultInput?: UserInput;
    onChangeProbability?: (p: number) => void;
}

export default function LogitPredictor({ model, title = 'Prédicteur', defaultInput, onChangeProbability }: LogitPredictorProps) {
	const initial: UserInput = useMemo(() => {
		const obj: UserInput = {};
		for (const v of model.schema.variables) {
			if (v.type === 'categorical')
				obj[v.name] = (defaultInput?.[v.name] ?? v.reference) as any;
			else
				obj[v.name] = (defaultInput?.[v.name] ?? 0) as any;
		}
		return obj;
	}, [model, defaultInput]);

	const [input, setInput] = useState<UserInput>(initial);
	const prob = useMemo(() => predictProbability(model, input), [model, input]);

	React.useEffect(() => { onChangeProbability?.(prob); }, [prob, onChangeProbability]);

  	return (
		<Paper variant="outlined" sx={{ p: 2,  }}>
			<Stack spacing={2}>
				<Typography variant="h6">{title}</Typography>

				<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
					{model.schema.variables.map(v => {
						if (v.type !== 'categorical') return null;
						const val = input[v.name] as any;
						return (
							<FormControl key={v.name} fullWidth>
								<InputLabel id={`${v.name}-label`}>{v.name}</InputLabel>
									<Select
										labelId={`${v.name}-label`}
										label={v.name}
										value={val}
										onChange={(e) =>
											setInput(prev => (
												{ ...prev, [v.name]: e.target.value }
											))}
									>
									{v.categories.map(opt => (
										<MenuItem key={String(opt)} value={opt as any}>
											{String(opt)}
										</MenuItem>
									))}
									</Select>
							</FormControl>
						);
					})}
				</Stack>

				<Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center">
					<Box sx={{ width: 260, height: 180 }}>
						<Gauge value={Math.round(prob * 100)} startAngle={-110} endAngle={110} />
					</Box>
					<Box sx={{ flex: 1 }}>
						<Typography variant="h4" sx={{ mb: 1 }}>
							{Math.round(prob * 100)}%
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Probabilité estimée par un modèle de régression logistique.
						</Typography>
					</Box>
				</Stack>

				{/* <Button variant="contained" onClick={() => console.log('Input courant:', input)}>
					Utiliser ce profil
				</Button> */}
			</Stack>
		</Paper>
  	);
}
