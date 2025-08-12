import * as React from 'react';
import { Box, Container, Typography, SxProps, Theme } from '@mui/material';

interface SectionProps {
    id?: string;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
}

export function Section({ id, children, sx }: SectionProps) {
    return (
        <Box
            id={id}
            component="section"
            sx={{
                py: { xs: 4, md: 6 },
                scrollMarginTop: { xs: '64px', md: '80px' }, // pour ancrage
                ...sx,
            }}
        >
            <Container maxWidth="lg">
                {children}
            </Container>
        </Box>
    );
}

interface SectionTitleProps {
    children: React.ReactNode;
    align?: 'left' | 'center';
    sx?: SxProps<Theme>;
}

export function SectionTitle({ children, align = 'left', sx }: SectionTitleProps) {
    return (
        <Typography
            variant="h4"
            component="h2"
            sx={{
                fontWeight: 700,
                mb: 3,
                textAlign: align,
                color: 'text.primary',
                ...sx,
            }}
        >
            {children}
        </Typography>
    );
}
