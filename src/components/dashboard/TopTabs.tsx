// src/components/dashboard/TopTabs.tsx
import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function TopTabs({
    value, onChange, labels = ["Infos du Dataset", "Visualisations", "Mode Jeu", "Notebook"],
}: { value: number; onChange: (v: number) => void; labels?: string[] }) {
    return (
        <Box sx={{ px: 1 }}>
            <Tabs
                value={value}
                onChange={(_, v) => onChange(v)}
                variant="scrollable"
                TabIndicatorProps={{ style: { height: 3, background: "primary.main" } }}
                sx={{
                "& .MuiTab-root": {
                    textTransform: "none",
                    minHeight: 40,
                    borderRadius: 0,
                    mx: 0.5,
                    px: 1.25,
                },
                "& .MuiTab-root.Mui-selected": {
                    background: "transparent",
                    color: "primary.main",
                    fontWeight: 700,
                },
                }}
            >
                {labels.map((label) => (
                    <Tab key={label} label={label} />
                ))}
            </Tabs>
        </Box>
    );
}
