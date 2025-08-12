import * as React from 'react';
import { Box, Typography } from '@mui/material';
import NotebookEmbed from '../../notebook/NotebookEmbed';

export default function TitanicNotebook() {
    return (
        <Box sx={{ display: 'grid', gap: 2 }}>
            {/* <Typography variant="subtitle1">Notebook d’exploration</Typography> */}
            <NotebookEmbed src="/notebooks/titanic.html" height={1100} title="Titanic – Notebook" />
        </Box>
    );
}
