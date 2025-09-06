import { Box, Container, Typography, Stack, LinearProgress, Grid, Avatar, useTheme, useMediaQuery, Paper, Divider, Card } from "@mui/material";
import SlideLayout from "../base/SlideLayout";

// --- Données groupées ---
const TECH_GROUPS = [
    {
        category: "Frontend",
        items: [
            { name: "React", level: 90, logo: "R" },
            { name: "TypeScript", level: 80, logo: "TS" },
            { name: "MUI (v7)", level: 90, logo: "M" },
            { name: "Vite", level: 85, logo: "V" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: 85, logo: "N" },
            { name: "Express", level: 80, logo: "Ex" },
            { name: "FastAPI", level: 70, logo: "Fa" },
        ],
    },
    {
        category: "Data / ML",
        items: [
            { name: "Python", level: 75, logo: "Py" },
            { name: "Pandas / NumPy", level: 75, logo: "Pn" },
            { name: "scikit-learn", level: 70, logo: "Sk" },
            { name: "TensorFlow / Keras", level: 60, logo: "Tf" },
            { name: "Jupyter / Colab", level: 80, logo: "J" },
        ],
    },
    {
        category: "Base de données",
        items: [
            { name: "SQL (PostgreSQL)", level: 70, logo: "SQL" },
            { name: "NoSQL (Couchbase)", level: 55, logo: "CB" },
        ],
    },
    {
        category: "DevOps & Outils",
        items: [
            { name: "Docker", level: 70, logo: "Dk" },
            { name: "Git / GitHub", level: 85, logo: "Git" },
            { name: "CI basique", level: 60, logo: "CI" },
            { name: "Linux / CLI", level: 65, logo: "Li" },
        ],
    },
];

// function levelColor(level: number): "success" | "primary" | "warning" | "error" {
//     if (level >= 85) return "success";
//     if (level >= 70) return "primary";
//     if (level >= 55) return "warning";
//     return "error";
// }

function SkillRow({ name, level, logo }: { name: string; level: number; logo?: string }) {
    const theme = useTheme();
    return (
        <Stack direction="row" alignItems="center" spacing={1.2}>
            <Avatar
                variant="rounded"
                sx={{ width: 28, height: 28, fontSize: 12, bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.200', color: 'text.primary' }}
            >
                {logo?.slice(0, 3) || name.slice(0, 2)}
            </Avatar>
            <Stack sx={{ flex: 1 }} spacing={0.5}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                    <Typography fontWeight={600} fontSize={14}>{name}</Typography>
                    <Typography variant="caption" color="text.secondary">{level}%</Typography>
                </Stack>
                <LinearProgress variant="determinate" value={level}  sx={{ height: 8, borderRadius: 999, bgcolor: 'divider' }} />
            </Stack>
        </Stack>
    );
}

export default function SkillsSlideGrouped() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

    const gridCols = { xs: 12, md: 6, lg: 4 } as const;

    return (
        <SlideLayout title="Skills" subtitle="Fullstack • Data • IA">
            <Grid container spacing={2}>
                {TECH_GROUPS.map((group) => (
                    <Grid key={group.category} size={{ xs:gridCols.xs, md:gridCols.md, lg:gridCols.lg}}>
                        <Card variant="outlined" sx={{ p: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
                                {group.category}
                            </Typography>

                            <Divider sx={{ mb: 1.5 }} />

                            <Stack spacing={1.2}>
                                {group.items.map((it) => (
                                    <SkillRow key={group.category + it.name} name={it.name} level={it.level} logo={it.logo} />
                                ))}
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </SlideLayout>
    );
}
