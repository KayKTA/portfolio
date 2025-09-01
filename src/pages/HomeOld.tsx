import Navbar from "../components/base/Navbar";
import Intro from "../components/slides/Intro";
import Skills from "../components/slides/Skills";
import Experience from "../components/slides/Experiences";
import { useEffect, useState } from "react";
import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Quote } from "lucide-react";
import Layout from "../components/base/Layout";
import Education from "../components/slides/Education";
import Hero from "../components/slides/Hero";


export default function Home() {

    return (
		<Layout>
			<Hero />
			<Intro />
			<Education />
			<Skills />
			<Experience />
		</Layout>
	);
}
