import { KeyboardDoubleArrowDown } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'


const Hero = () => {
    // const [scrollY, setScrollY] = useState(0)
    const [displayed, setDisplayed] = useState('')

    // Code affiché + animation typing
    const fullCode = `
    for (let idée of projets) {
        construire(idée);
        tester(idée);
        ameliorer(idée);
    }`

    useEffect( () => {
        let i = 0
        const id = setInterval(() => {
            setDisplayed(fullCode.slice(0, i + 1))
            i++
            if (i >= fullCode.length) clearInterval(id)
        }, 40) // vitesse ms/caractère
        return () => clearInterval(id)
    }, [])

    // useEffect(() => {
    //     const handleScroll = () => setScrollY(window.scrollY)
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

    // const parallaxStyle = { transform: `translateY(${scrollY * 0.1}px)` }

    return (
        <Box component="section" sx={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Container maxWidth="lg">
                {/* <Box sx={{ borderRadius: '10px', ...parallaxStyle }}> */}
                <Box sx={{ borderRadius: '10px'}}>
                    {/* Titre */}
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, px: 5, py: 5 }}>
                        <Typography
                        variant="h1"
                        sx={{ fontSize: { md: '5rem', lg: '7rem' }, fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.02em' }}
                        >
                            {/* Kaniba KEITA */}
                        </Typography>
                        <Typography variant="overline" sx={{ letterSpacing: '0.3em', fontSize: { md: '0.7rem', lg: '1.3rem' }, px: 1 }}>
                            DÉVELOPPEUSE FULLSTACK • DATA SCIENTIST
                        </Typography>
                    </Box>

                    {/* Code à droite */}
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start'}, px: 5 }}>
                        <Box component="pre" sx={{ m: 0, p: 0, background: 'transparent' }}>
                            <SyntaxHighlighter
                                language="javascript"
                                // style={vscDarkPlus}
                                customStyle={{
                                    background: 'none',
                                    border: 'none',
                                    margin: 0,
                                    padding: 0,
                                    fontSize: '1.35rem',
                                    display:'inline',
                                }}
                                wrapLines
                                wrapLongLines
                            >
                                {displayed}
                            </SyntaxHighlighter>
                            <Box sx={{backgroundColor: "primary.main", py:0.8, px:0.1, display:'inline'}}/>
                        </Box>
                    </Box>
                </Box>
            </Container>

            {/* Indicateur scroll
            <Box sx={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                <Box
                    sx={{
                        mx: 'auto',
                        px: 2,
                        py: 2,
                        animation: 'float 3s ease-in-out infinite',
                        '@keyframes float': { '0%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' }, '100%': { transform: 'translateY(0px)' } },
                    }}
                >
                    <KeyboardDoubleArrowDown />
                </Box>
            </Box> */}
        </Box>
    )
}

export default Hero
