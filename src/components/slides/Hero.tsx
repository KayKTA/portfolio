// src/components/slides/HomeSlide.tsx
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SlideLayout from "../base/SlideLayout";
import CodeTyper from "../common/CodeTyper";

const SNIPPET = `for (let idée of projets) {
  construire(idée);
  tester(idée);
  améliorer(idée);
}`;

export default function Hero() {
    return (
        <SlideLayout title="Kaniba Keita" subtitle="Développeuse Fullstack • Data & IA">
            <Container
                maxWidth="md"
                component={motion.div}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: 4,
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "8vw", md: "4.2vw" },
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: -1,
                    }}
                >
                    Développeuse Fullstack Senior
                </Typography>

            {/* Bloc code avec typing effect */}
            <Box
                component="pre"
                sx={(theme) => ({
                    m: 0,
                    p: 3,
                    fontSize: { xs: "3.4vw", md: "1.2vw" },
                    // borderRadius: 2,
                    // color: "#0F0F0F",
                    // background:
                    // theme.palette.mode === "dark"
                    //     ? "linear-gradient(180deg, rgba(255,255,255,.1), rgba(255,255,255,.06))"
                    //     : "rgba(0,0,0,0.05)",
                    // backdropFilter: "blur(2px)",
                    // outline: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}`,
                    // "--accent": "#FEE440",
                })}
            >
            <span style={{ color: "var(--accent)" }}>
                <CodeTyper code={SNIPPET} baseSpeed={35} loop />
            </span>
            </Box>
        </Container>
        </SlideLayout>
    );
}
