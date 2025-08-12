import * as React from 'react';
import { Paper, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import type { Project } from '../projects/projects';

type Props = {
    projects: Project[];
    selectedId: string;
    onSelect: (id: string) => void;
};

export default function Sidebar({ projects, selectedId, onSelect }: Props) {
    return (
        <Paper
            variant="outlined"
            sx={{
                p: 0,
                overflow: 'hidden',
                position: 'sticky',
                top: 0,
                alignSelf: 'start',
                maxHeight: 'calc(100vh - 32px)',
                    marginTop:'40px',
            }}
        >
            <List
                dense
                disablePadding
                subheader={<ListSubheader>Mes Projets</ListSubheader>}
            >
                {/* <ListItemText >Liste des projets</ListItemText> */}

                {projects.map((p) => (
                    <ListItemButton
                        key={p.id}
                        selected={p.id === selectedId}
                        onClick={() => onSelect(p.id)}
                    >
                        <ListItemText primary={p.title} secondary={p.id} />
                    </ListItemButton>
                ))}
            </List>
        </Paper>
    );
}
