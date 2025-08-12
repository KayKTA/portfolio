import * as React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Project } from "../projects/projects";

export default function SidebarTabs({
	items, value, onChange,
}: { items: Project[]; value: string; onChange: (id: string) => void }) {
	const RADIUS = 28;
	const selectedIndex = items.findIndex((it) => it.id === value);

	return (
		<Box
			sx={{
				height: "100%",
				bgcolor: "primary.main",
				color: "primary.contrastText",
				pl: 1,
				pr: 0,
				py: 1,
			}}
		>
			<Box
				sx={{
					bgcolor: "background.paper",
					p: 0,
				}}
			>

				<Box
					sx={{
						height:"70px",
						// borderRadius: RADIUS,
						bgcolor: "primary.main",
						...(selectedIndex === 0 ? { borderBottomRightRadius: RADIUS } : null),
					}}
				/>
			</Box>
			<Tabs
				value={value}
				onChange={(_, v) => onChange(v)}
				orientation="vertical"
				sx={{
						bgcolor: "background.paper",
						p: 0,
						"& .MuiTabs-indicator": { display: "none" }, // on gère tout via sx
				}}
			>
				{items.map((it, idx) => {
					const isSelected = idx === selectedIndex;
					const isAboveSelected = idx === selectedIndex - 1;
					const isBelowSelected = idx === selectedIndex + 1;

					// arrondis calculés UNIQUEMENT pour les voisins
					const tr = isAboveSelected ? RADIUS : 0;
					const br = isBelowSelected ? RADIUS : 0;

					return (
						<Tab
							key={it.id}
							value={it.id}
							disableRipple
							label={
									<Box sx={{textAlign: "left"}}>
											<Box sx={{ fontWeight: "bold" }}>{it.title}</Box>
											<Box sx={{ fontSize: 12, opacity: 0.65 }}>{it.subtitle ?? it.id}</Box>
									</Box>
							}
							sx={{
								textTransform: "none",
								alignItems: "flex-start",
								justifyContent: "flex-start",
								px: 2,
								py: 1.5,

								// couleurs via palette
								bgcolor: isSelected ? "background.paper" : "primary.main",
								fontWeight: isSelected ? 700 : 500,

								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
								borderTopRightRadius: 0,
								borderBottomRightRadius: 0,

								...(tr ? { borderBottomRightRadius: tr } : null),
								...(br ? { borderTopRightRadius: br } : null),
								// ...(isSelected
								//     ? {
								//         borderTopLeftRadius: RADIUS,
								//     }
								// : null),


								"&:hover": {
										bgcolor: isSelected ? "background.paper" : "primary.dark",
								},
							}}
						/>
						);
					})}
			</Tabs>
		</Box>
	);
}
