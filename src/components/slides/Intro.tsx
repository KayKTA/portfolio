import React from 'react'
import { Box, Container, Divider, Typography } from '@mui/material'

const Intro = () => {
    return (
        <Box sx={{ py: 8, textAlign: 'center' }}>
            <Container>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 300,
                        fontStyle: 'italic',
                        color: 'text.secondary',
                        maxWidth: '800px',
                        mx: 'auto',
                        lineHeight: 1.6,
                        mb: 4
                    }}
                >
                    "Après 6 ans en tant que développeuse FullStack JavaScript, j’ai choisi de me spécialiser en data science.
                    J’ai récemment terminé la formation Data Science & IA du Wagon, et je cherche aujourd’hui à rejoindre une équipe où je pourrai mêler mes compétences techniques et mon intérêt pour l’analyse de données."
                </Typography>

                {/* <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.2em' }}>
                    —
                </Typography> */}

                <Divider sx={{ maxWidth: 100, mx: 'auto', mt: 4, borderColor: 'text.primary' }} />
            </Container>
        </Box>
    )
}


export default Intro
