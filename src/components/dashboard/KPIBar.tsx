import * as React from 'react';
import { Paper, Typography, Box } from '@mui/material';

export type KPIItem = {
    label: string;           // ex: "Passagers"
    value: string | number;  // ex: 891 ou "38.4%"
    hint?: string;           // ex: "train.csv"
};

export default function KPIBar({ items }: { items: KPIItem[] }) {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: { xs: '1fr 1fr', md: `repeat(${Math.min(items.length, 4)}, 1fr)` },
				gap: 2,
				mb: 2,
			}}
		>
		{items.map((item, idx) => (
			<Paper
				key={idx}
				variant="outlined"
				sx={{
					p: 1.5,
					borderRadius: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<Typography variant="overline" color="info.main">{item.label}</Typography>
				<Typography variant="h5" sx={{ lineHeight: 1.2 }}>{item.value}</Typography>
				{item.hint && (
					<Typography variant="caption" color="info.main">{item.hint}</Typography>
				)}
			</Paper>
		))}
		</Box>
	);
}


// import * as React from "react";
// import { Grid, Paper, Typography, Box } from "@mui/material";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import GroupsIcon from "@mui/icons-material/Groups";
// import WcIcon from "@mui/icons-material/Wc";
// import InsightsIcon from "@mui/icons-material/Insights";

// export type KPIItem = {
// 	label: string;
// 	value: string | number;
// 	hint?: string;
// 	icon?: React.ReactNode;
// };

// const defaultIcons = [<GroupsIcon/>, <TrendingUpIcon/>, <WcIcon/>, <InsightsIcon/>];

// export default function KPIBar({ items }: { items: KPIItem[] }) {
// 	return (
// 		<Grid container spacing={2}>
// 			{items.map((it, i) => (
// 				<Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
// 					<Paper
// 						variant="outlined"
// 						sx={{
// 							p: 2,
// 							position: "relative",
// 							overflow: "hidden",
// 							"&:before": {
// 								content: '""',
// 								position: "absolute",
// 								inset: 0,
// 								background: "rgba(229,133,0,0.12)", // amber → misty
// 								pointerEvents: "none",
// 							},
// 						}}
// 					>
// 						<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
// 							<Box
// 								sx={{
// 									width: 32,
// 									height: 32,
// 									borderRadius: "50%",
// 									backgroundColor: "secondary.main",
// 									color: "secondary.contrastText",
// 									display: "grid",
// 									placeItems: "center",
// 									flex: "0 0 auto",
// 								}}
// 							>
// 								{it.icon ?? defaultIcons[i % defaultIcons.length]}
// 							</Box>
// 							<Typography variant="overline" color="info.main">
// 								{it.label}
// 							</Typography>
// 						</Box>
// 						<Typography variant="h5" sx={{ mt: 0.5 }}>
// 							{it.value}
// 						</Typography>
// 						{it.hint && (
// 							<Typography variant="caption" color="info.main">
// 								{it.hint}
// 							</Typography>
// 						)}
// 					</Paper>
// 				</Grid>
// 			))}
// 		</Grid>
// 	);
// }
