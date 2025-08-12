import * as React from 'react';
import Papa from 'papaparse';
import KPIBar, { type KPIItem } from '../../dashboard/KPIBar';

interface TitanicKPIProps {
    dataUrl: string;
    modelUrl?: string;
}

export default function TitanicKPI({ dataUrl }: TitanicKPIProps) {
    const [stats, setStats] = React.useState<{
        total: number;
        survivedRate: number;
        avgAge: number;
        femaleRate: number;
    } | null>(null);

    React.useEffect(() => {
        Papa.parse(dataUrl, {
            download: true,
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (result) => {
                const data = result.data as any[];

                const clean = data.filter((r) => r && r.Survived !== undefined && r.Survived !== null);
                const total = clean.length || 0;

                const survivedRate = total
                ? (clean.filter((r) => Number(r.Survived) === 1).length / total) * 100
                : 0;

                const ages = clean.map((r) => Number(r.Age)).filter((v) => Number.isFinite(v));
                const avgAge = ages.length ? ages.reduce((a, b) => a + b, 0) / ages.length : 0;

                const femaleRate = total
                ? (clean.filter((r) => String(r.Sex).toLowerCase() === 'female').length / total) * 100
                : 0;

                setStats({ total, survivedRate, avgAge, femaleRate });
            },
        });
    }, [dataUrl]);

    if (!stats) return null;

    const items: KPIItem[] = [
        { label: 'Passagers',    value: stats.total.toLocaleString(), hint: 'Total dans le dataset' },
        { label: 'Taux de survie', value: `${stats.survivedRate.toFixed(1)}%`, hint: 'Survivants / total' },
        { label: 'Âge moyen',    value: `${stats.avgAge.toFixed(1)} ans`,      hint: 'Parmi les passagers connus' },
        { label: 'Femmes',       value: `${stats.femaleRate.toFixed(1)}%`,     hint: 'Proportion dans le dataset' },
    ];

    return <KPIBar items={items} />;
}


// import * as React from 'react';
// import { Grid, Paper, Typography } from '@mui/material';
// import Papa from 'papaparse';

// interface TitanicKPIProps {
//   dataUrl: string;
//   modelUrl?: string;
// }

// export default function TitanicKPI({ dataUrl }: TitanicKPIProps) {
// 	const [stats, setStats] = React.useState<{
// 		total: number;
// 		survivedRate: number;
// 		avgAge: number;
// 		femaleRate: number;
// 	} | null>(null);

// 	React.useEffect(() => {
// 		Papa.parse(dataUrl, {
// 			download: true,
// 			header: true,
// 			dynamicTyping: true,
// 			complete: (result) => {
// 				const data = result.data as any[];

// 				// Nettoyage rapide (on ignore les lignes vides)
// 				const cleanData = data.filter((row) => row.Survived !== undefined && row.Survived !== null);

// 				const total = cleanData.length;
// 				const survivedRate = (
// 					cleanData.filter((row) => row.Survived === 1).length / total
// 				) * 100;
// 				const avgAge = cleanData.reduce((sum, row) => sum + (row.Age || 0), 0) /
// 				cleanData.filter((row) => row.Age).length;

// 				const femaleRate = (
// 					cleanData.filter((row) => row.Sex === 'female').length / total
// 				) * 100;

// 				setStats({
// 				total,
// 				survivedRate,
// 				avgAge,
// 				femaleRate,
// 				});
// 			},
// 		});
// 	}, [dataUrl]);

//   	if (!stats) return null;

//   const kpiItems = [
//     {
//       label: 'Passagers',
//       value: stats.total.toLocaleString(),
//       sub: 'Total dans le dataset',
//     },
//     {
//       label: 'Taux de survie',
//       value: `${stats.survivedRate.toFixed(1)}%`,
//       sub: 'Survivants / total',
//     },
//     {
//       label: 'Âge moyen',
//       value: `${stats.avgAge.toFixed(0)} ans`,
//       sub: 'Parmi les passagers connus',
//     },
//     {
//       label: 'Femmes',
//       value: `${stats.femaleRate.toFixed(1)}%`,
//       sub: 'Proportion dans le dataset',
//     },
//   ];

// 	return (
// 		<Grid container spacing={1.5}>
// 			{kpiItems.map((kpi, idx) => (
// 				<Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
// 					<Paper
// 						variant="outlined"
// 						sx={{
// 							p: 1.5,
// 							borderRadius: 1,
// 							display: 'flex',
// 							flexDirection: 'column',
// 							alignItems: 'center',
// 							textAlign: 'center',
// 						}}
// 					>
// 						<Typography variant="body2" color="text.secondary">
// 							{kpi.label}
// 						</Typography>
// 						<Typography variant="h6" sx={{ fontWeight: 'bold', mt: 0.5 }}>
// 							{kpi.value}
// 						</Typography>
// 						<Typography variant="caption" color="text.secondary">
// 							{kpi.sub}
// 						</Typography>
// 					</Paper>
// 				</Grid>
// 			))}
// 		</Grid>
// 	);
// }
