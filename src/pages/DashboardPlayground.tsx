import * as React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Layout from "../components/base/Layout";
import TopTabs from "../components/dashboard/TopTabs";
// import SidebarTabs, { SideTab } from "../components/dashboard/SidebarTabs";

// const PROJECTS: SideTab[] = [
//   { id: "p1", label: "Projet A" },
//   { id: "p2", label: "Projet B" },
//   { id: "p3", label: "Projet C" },
//   { id: "p4", label: "Projet D" },
// ];

export default function DashboardPlayground() {
    const [selected, setSelected] = React.useState("p3");
    const [tab, setTab] = React.useState(0);

    return (
        <Layout>
        <Paper
            variant="outlined"
            sx={{ mt: 2, borderRadius: 1, overflow: "hidden" }} // 1 seul bloc
        >
            <Grid container spacing={0} sx={{ minHeight: "70vh" }}>
            {/* Sidebar : aucune marge/gap */}
            <Grid size={{ xs: 12, md: 3, lg: 2 }}>
                {/* <SidebarTabs items={PROJECTS} value={selected} onChange={setSelected} /> */}
            </Grid>

            {/* Contenu : collé à la sidebar */}
            <Grid size={{ xs: 12, md: 9, lg: 10 }}>
                <Box sx={{ p: 2, display: "grid", gap: 2 }}>
                <TopTabs value={tab} onChange={setTab} />

                <Paper variant="outlined" sx={{ p: 2, borderRadius: 1, minHeight: 260 }}>
                    {tab === 0 && <Typography>(INFO) Contenu de test.</Typography>}
                    {tab === 1 && <Typography>(DATA) Contenu de test.</Typography>}
                    {tab === 2 && <Typography>(JEU) Contenu de test.</Typography>}
                    {tab === 3 && <Typography>(NOTEBOOK) Contenu de test.</Typography>}
                </Paper>

                <Paper variant="outlined" sx={{ p: 2, borderRadius: 1, minHeight: 360 }}>
                    <Typography variant="body2" color="text.secondary">
                    hello
                    </Typography>
                </Paper>
                </Box>
            </Grid>
            </Grid>
        </Paper>
        </Layout>
    );
}
