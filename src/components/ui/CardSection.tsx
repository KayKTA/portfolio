import * as React from "react";
import { Paper, Box, Typography } from "@mui/material";

export default function CardSection({
	title,
	subtitle,
	action,
	children,
}: {
	title?: string;
	subtitle?: string;
	action?: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<Paper
			variant="outlined"
			sx={{
				p: 2,
				// background:
				// "linear-gradient(180deg, rgba(167,157,218,0.075) 0%, rgba(255,255,255,1) 60%)",
			}}
		>
			{(title || action) && (
				<Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
				    {title && <Typography variant="subtitle1">{title}</Typography>}
				<Box sx={{ flex: 1 }} />
				    {action}
				</Box>
			)}
			{subtitle && (
				<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
				{   subtitle}
				</Typography>
			)}
			{children}
		</Paper>
	);
}
