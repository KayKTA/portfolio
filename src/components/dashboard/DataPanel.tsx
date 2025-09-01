import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Project } from '../projects/projects';
import TitanicData from '../projects/titanic/TitanicData';
import Papa from 'papaparse';

export default function DataPanel({ dataUrl, project }: { dataUrl?: string, project?: Project }) {
	const [rows, setRows] = useState<any[]>([]);
	const [columns, setColumns] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!dataUrl) {
			setRows([]); setColumns([]); return;
		}
		setLoading(true);
		Papa.parse(dataUrl, {
			download: true,
			header: true,
			dynamicTyping: true,
			skipEmptyLines: true,
			complete: res => {
				const data = (res.data as any[]).slice(0, 50);
				setRows(data);
				setColumns(data.length ? Object.keys(data[0]) : []);
				setLoading(false);
			},
			error: () => setLoading(false),
		});
	}, [dataUrl]);

	if (!dataUrl) return <Typography color="info.main">Aucun fichier de données.</Typography>;
	if (loading) return <CircularProgress size={24} />;
	if (project?.id === 'titanic') {
		return <TitanicData dataUrl={dataUrl} />;
	}
		return (
		<Box sx={{ overflowX: 'auto' }}>
			<Typography variant="subtitle1" sx={{ mb: 1 }}>Aperçu (50 premières lignes)</Typography>
			<table style={{ width: '100%', borderCollapse: 'collapse' }}>
				<thead>
				<tr>{columns.map(c => (
					<th key={c} style={{ textAlign: 'left', padding: '6px 8px', borderBottom: '1px solid var(--mui-palette-divider)' }}>{c}</th>
				))}</tr>
				</thead>
				<tbody>
				{rows.map((r, i) => (
					<tr key={i}>
					{columns.map(c => (
						<td key={c} style={{ padding: '6px 8px', borderBottom: '1px solid var(--mui-palette-action-hover)' }}>
						{String(r[c] ?? '')}
						</td>
					))}
					</tr>
				))}
				</tbody>
			</table>
		</Box>
		);
}
