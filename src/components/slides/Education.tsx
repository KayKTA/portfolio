// src/components/slides/EducationRetroSlide.tsx
import { Box, Grid, Typography, Stack, Chip } from "@mui/material";
import SlideLayout from "../base/SlideLayout";

type Formation = {
    year: string;
    school: string;
    title: string;
    intro?: string;         // accroche
    description?: string[];   // paragraphe explicatif
    techs?: string[];       // badges techno
    logo?: string;
    isNew?: boolean;
};

const FORMATIONS_1: Formation[] = [
    {
        year: "2025",
        school: "Le Wagon",
        title: "Data Science & IA",
        intro: "Bootcamp intensif orienté projet.",
        description: [
            "Manipulation et visualisation de données",
            "Machine & Deep Learning",
            "IA Générative : LLMs, RAG",
            "Mise en production de modèles",
            "Conception de pipelines de données"
        ],
        techs: ["Python", "Pandas", "scikit-learn", "TensorFlow", "FastAPI", "Docker"],
        logo: "/logos/wagon.png",
        isNew: true,
    },
]
const FORMATIONS: Formation[] = [
    // {
    //     year: "2025",
    //     school: "Le Wagon",
    //     title: "Data Science & IA",
    //     intro: "Bootcamp intensif orienté projet.",
    //     description: [
    //         "Manipulation et visualisation de données",
    //         "Machine & Deep Learning",
    //         "IA Générative : LLMs, RAG",
    //         "Mise en production de modèles",
    //         "Conception de pipelines de données"
    //     ],
    //     techs: ["Python", "Pandas", "scikit-learn", "TensorFlow", "FastAPI", "Docker"],
    //     logo: "/logos/wagon.png",
    //     isNew: true,
    // },
    {
        year: "2018",
        school: "Coding Academy by EPITECH",
        title: "Développeur Web FullStack",
        intro: "Formation intensive (5 mois) centrée sur les fondamentaux du développement web.",
        description:[
            "Piscine C, algorithmie",
            "Développement front (AngularJS/React) et back (Node.js, Express)",
            "Gestion de bases de données SQL/NoSQL",
            "Méthodologie projet & travail en équipe agile",
        ],
        techs: ["JavaScript", "PHP", "Node.js", "SQL", "NoSQL", "C", "Git"],
        logo: "/logos/coding.png",
    },
    // {
    //     year: "2017",
    //     school: "IFOCOP Paris XI",
    //     title: "Intégrateur Web",
    //     intro: "Spécialisation en intégration.",
    //     description: [
    //         "Bases du développement Web",
    //         "Conception et intégration de maquettes HTML/CSS",
    //         "Création de sites responsives",
    //         "CMS: Wordpress, Drupal"
    //     ],
    //     techs: [ "JavaScript", "PHP", "HTML", "CSS"],
    //     logo: "/logos/ifocop.png",
    // },
    {
        year: "2017",
        school: "IFOCOP Paris XI",
        title: "Développeur Intégrateur Web",
        intro: "Formation de 8 mois (4 mois de cours + 4 mois de stage).",
        description:[
            "Intégration de maquettes: HTML / CSS",
            "Mise en place de sites responsives",
            "Bases de JavaScript",
            "Introduction au développement PHP/MySQL",
        ],
        techs: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Git", "Agile"],
        logo: "/logos/ifocop.png",
    }
    // {
    //     year: "2013",
    //     school: "École Nationale de Commerce — Paris",
    //     title: "BTS Comptabilité & Gestion",
    //     intro: "Formation en gestion et finance d’entreprise.",
    //     description: [
    //         "Acquisition des bases en comptabilité générale",
    //         "contrôle de gestion et droit appliqué, constituant une solide fondation analytique",
    //     ],
    //     techs: ["SQL", "Access", "Comptabilité", "Management" ],
    //     logo: "/logos/enc.jpeg",
    // },
];

function FormationCard({ f }: { f: Formation }) {
    return (
        <Box
            sx={{
                border: "4px solid #AE2B1F",
                borderRadius: 1,
                bgcolor: "background.default",
                p: 2,
                height: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
            }}
        >
            {/* Badge NEW */}
            {f.isNew && (
                <Box
                    sx={{
                        position: "absolute",
                        top: -14,
                        right: -14,
                        bgcolor: "#AE2B1F",
                        color: "white",
                        fontWeight: 900,
                        fontSize: "0.75rem",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "50%",
                        transform: "rotate(-10deg)",
                    }}
                >
                    NEW
                </Box>
            )}

            {/* Header : logo + titre */}
            <Stack direction="row" spacing={2} alignItems="center">
                {f.logo && (
                    <Box
                        component="img"
                        src={f.logo}
                        alt={f.title}
                        sx={{
                            width: 52,
                            height: 52,
                            objectFit: "contain",
                            filter: "grayscale(100%) contrast(1.2)",
                        }}
                    />
                )}
                <Stack sx={{ flex: 1 }} spacing={1}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 900,
                                textTransform: "uppercase",
                                color: "primary.main",
                                lineHeight: 1.1,
                            }}
                        >
                            {f.title}
                        </Typography>
                        <Typography
                            variant="h6"
                            // color="text.secondary"
                            sx={{
                                fontWeight: 900,
                                textTransform: "uppercase",
                                color: "primary.main",
                                lineHeight: 1.1,
                            }}
                        >
                            {f.year}
                        </Typography>
                    </Stack>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 700,
                            color: "text.primary",
                            borderBottom: "2px solid #AE2B1F",
                            pb: 0.5,
                        }}
                    >
                        {f.school}
                    </Typography>
                </Stack>
            </Stack>

            {/* Intro */}
            {f.intro && (
                <Typography variant="body2" sx={{ fontWeight: 700, color: "text.primary" }}>
                    {f.intro}
                </Typography>
            )}

            {/* Description */}
            {f.description && (
                // <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.5 }}>
                //   {f.description}
                // </Typography>
                <Stack spacing={0.5} sx={{ mt: 1, flex: 1 }} useFlexGap>
                    {f.description.map((d, i) => (
                        <Typography
                            key={i}
                            variant="body2"
                            sx={{
                                color: "text.secondary",
                                fontSize: "0.85rem",
                                "&:before": {
                                    content: '"★"',
                                    color: "#AE2B1F",
                                    fontWeight: 900,
                                    display: "inline-block",
                                    width: "1.2em",
                                },
                            }}
                        >
                            {" "}{d}
                        </Typography>
                    ))}
                </Stack>
            )}

            {/* Badges techno */}
            {f.techs?.length ? (
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: "auto" }} useFlexGap>
                    {f.techs.map((t) => (
                        <Chip
                            key={t}
                            label={t}
                            size="small"
                            sx={{
                                bgcolor: "background.paper",
                                border: "2px solid #AE2B1F",
                                color: "text.primary",
                                borderRadius: 1,
                                height: 26,
                                fontWeight: 700,
                                "& .MuiChip-label": { px: 1, py:5 },
                            }}
                            variant="outlined"
                        />
                    ))}
                </Stack>
            ) : null}
        </Box>
    );
}

export default function EducationRetroSlide() {
    return (
        <SlideLayout
            title="Formations"
            intro="J’ai commencé à coder en autodidacte puis j’ai consolidé mes compétences à travers différentes formations intensives"
        >
            <Box sx={{ width: "100%", maxWidth: 1100 }}>
                <Grid container spacing={3}>
                    {FORMATIONS_1.map((f) => (
                        <Grid key={f.title}  size={{ xs:12}}>
                            <FormationCard f={f} />
                        </Grid>
                    ))}
                    {FORMATIONS.map((f) => (
                        <Grid key={f.title}  size={{ xs:12, sm:6}}>
                            <FormationCard f={f} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SlideLayout>
    );
}
