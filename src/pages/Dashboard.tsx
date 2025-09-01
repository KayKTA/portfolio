import * as React from 'react';
import { useMemo, useState } from 'react';
import { Box, Typography, Tabs, Tab, Divider, Paper, Grid } from '@mui/material';

import { PROJECTS, Project } from '../components/projects/projects';
import InfoPanel from '../components/dashboard/InfoPanel';
import DataPanel from '../components/dashboard/DataPanel';
import GamePanel from '../components/dashboard/GamePanel';
import Layout from '../components/base/Layout';
import TitanicNotebook from '../components/projects/titanic/TitanicNotebook';
import SidebarTabs from '../components/dashboard/SidebarTabs';
import TopTabs from '../components/dashboard/TopTabs';

// function a11yProps(i: number) {
//   	return { id: `dash-tab-${i}`, 'aria-controls': `dash-tabpanel-${i}` };
// }

export default function Dashboard() {
    const [selectedId, setSelectedId] = useState(PROJECTS[0]?.id ?? '');
    const project = useMemo<Project | undefined>(() => PROJECTS.find(p => p.id === selectedId), [selectedId]);
    const [tab, setTab] = useState(0);

  return (
	<Layout pageTitle={project?.title} subtitle={project?.subtitle}>
		<Box
			// variant="outlined"
			sx={{ mt: 2, overflow: "hidden", backgroundColor:'background.paper' }}
		>
				{/* Sidebar */}
			<Grid container spacing={0} sx={{ minHeight: "70vh" }}>
				<Grid size={{ xs: 12, md: 3, lg: 2 }}>
					<SidebarTabs
						items={PROJECTS}
						value={selectedId}
						onChange={(id) => { setSelectedId(id); setTab(0); }}
					/>
				</Grid>

				<Grid size={{ xs: 12, md: 9, lg: 10 }}>
					<Box sx={{ p: 2, display: "grid", gap: 2 }}>
						<TopTabs value={tab} onChange={setTab} />
						<Paper elevation={0} sx={{ p: 2, minHeight: "70vh" }}>
							{tab === 0 && project && <InfoPanel project={project} />}
							{tab === 1 && project && <DataPanel dataUrl={project.dataUrl} project={project} />}
							{tab === 2 && project && <GamePanel project={project}/>}
							{tab === 3 && project && <TitanicNotebook />}
						</Paper>
					</Box>
				</Grid>
			</Grid>
		</Box>

		{/* Contenu principal */}
				{/* <Typography variant="h5" sx={{ mb: 1 }}>{project?.title}</Typography> */}
				{/* <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
				Vue projet • Info • Data • Jeu
				</Typography> */}

				{/* <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable">
					<Tab label="Détails du projet" {...a11yProps(0)} />
					<Tab label="Visualisations de données" {...a11yProps(1)} />
					<Tab label="Mode Jeu"  {...a11yProps(2)} />
					<Tab label="Notebook"  {...a11yProps(3)} />
				</Tabs>
				<Divider sx={{ my: 2 }} /> */}
	</Layout>

  );
}
