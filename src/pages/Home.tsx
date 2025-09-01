import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Hero from "../components/slides/Hero";
import Intro from "../components/slides/Intro";
import Education from "../components/slides/Education";
import Skills from "../components/slides/Skills";
import Experience from "../components/slides/Experiences";

export default function Home() {
    const slides = useMemo(
        () => [
            <Hero key="hero" />,
            // <Intro key="intro" />,
            <Education key="edu" />,
            <Skills key="skills" />,
            <Experience key="xp" />
        ],
        []
    );

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
        document.body.style.overflow = prevOverflow;
        };
    }, []);

    const goNext = useCallback(() => setIndex((i) => Math.min(i + 1, slides.length - 1)), [slides.length]);
    const goPrev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goNext, goPrev]);

    return (
        <Box>
            <Box
                sx={{
                    position: "relative",
                    width: "100vw",
                    height: "100dvh",
                    overflow: "hidden",
                    bgcolor: "background.default",
                }}
            >
                {/* Slides container */}
                <Box
                    sx={{
                        display: "flex",
                        width: `${slides.length * 100}dvw`,
                        height: "100%",
                        transform: `translateX(-${index * 100}dvw)`,
                        transition: "transform 420ms cubic-bezier(.2,.8,.2,1)",
                    }}
                >
                    {slides.map((slide, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: "100dvw",
                                height: "100dvh",
                                overflow: "hidden",
                                display: "grid",
                            }}
                        >
                            {slide}
                        </Box>
                    ))}
                </Box>

                {/* Bouton suivant */}
                <IconButton
                    aria-label="slide suivante"
                    onClick={goNext}
                    disabled={index === slides.length - 1}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "transparent",
                        "&:disabled": { opacity: 0.2 },
                        "& svg": {
                            fontSize: 40,
                            animation: "pulseRight 1.2s infinite ease-in-out",
                        },
                        "@keyframes pulseRight": {
                            "0%, 100%": { transform: "translateX(0)" },
                            "50%": { transform: "translateX(6px)" },
                        },
                    }}
                >
                    <ChevronRightIcon />
                </IconButton>

                {/* Bouton précédent */}
                <IconButton
                    aria-label="slide précédente"
                    onClick={goPrev}
                    disabled={index === 0}
                    sx={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "transparent",
                        "&:disabled": { opacity: 0.2 },
                        "& svg": {
                            fontSize: 40,
                            animation: "pulseLeft 1.2s infinite ease-in-out",
                        },
                        "@keyframes pulseLeft": {
                            "0%, 100%": { transform: "translateX(0)" },
                            "50%": { transform: "translateX(-6px)" },
                        },
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>
                {/* puces d’état / progression */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 8,
                    }}
                >
                    {slides.map((_, i) => (
                        <Box
                            key={i}
                            sx={(theme) => ({
                                width: i === index ? 28 : 8,
                                height: 8,
                                borderRadius: 999,
                                transition: "width .25s ease",
                                bgcolor: i === index ? theme.palette.primary.main : theme.palette.divider,
                            })}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
