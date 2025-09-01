import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import SlideLayout from "../base/SlideLayout";

const FORMATIONS = [
  {
    year: "2025",
    school: "Le Wagon",
    title: "Data Science & IA",
    details: [
      "MLOps : Docker, FastAPI, MLflow, Prefect",
      "Machine Learning & Deep Learning (TensorFlow)",
      "IA Générative : LLMs, RAG",
      "Manipulation & viz de données (Python, Pandas, Matplotlib)",
    ],
  },
  {
    year: "2018",
    school: "Coding Academy by EPITECH",
    title: "Développeur Web FullStack",
    details: [
      "HTML, CSS, JavaScript, POO",
      "Front (React, Vue.js) et Back (Node.js, Express)",
      "Bases SQL & NoSQL, méthodologie projet",
    ],
  },
  {
    year: "2017",
    school: "IFOCOP Paris XI",
    title: "Intégrateur Web",
    details: ["Maquettage HTML/CSS", "Responsive & accessibilité"],
  },
  {
    year: "2013",
    school: "École Nationale de Commerce — Paris",
    title: "BTS Comptabilité & Gestion",
    details: [],
  },
];

function FormationCard({ year, school, title, details }: typeof FORMATIONS[number]) {
    return (
        <Paper
            variant="outlined"
            sx={{
                p: 2,
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 1 }}>
                <Typography variant="h6" fontWeight={700}>
                {title}
                </Typography>
                <Typography color="text.secondary">{year}</Typography>
            </Stack>
            <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                {school}
            </Typography>
            <Stack spacing={0.5} sx={{ flex: 1 }}>
                {details.map((d) => (
                    <Typography key={d} variant="body2" color="text.secondary">
                        • {d}
                    </Typography>
                ))}
            </Stack>
        </Paper>
    );
}

export default function Education() {
    return (
        <SlideLayout title="Éducation & Formations">
            <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
                <Grid container spacing={3}>
                    {FORMATIONS.map((formation) => (
                        <Grid key={formation.title} size={{xs:12, md:6}}>
                            <FormationCard {...formation} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SlideLayout>
    );
}
