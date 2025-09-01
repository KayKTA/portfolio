// src/components/slides/SlideLayout.tsx
import { Box, Container, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface SlideLayoutProps {
  title: string;
}

export default function SlideLayout({ title, children }: PropsWithChildren<SlideLayoutProps>) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header : titre en haut à gauche */}
      <Box
        sx={{
          py: 2,
          px: 3,
        //   borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h3" fontWeight={800}>
          {title}
        </Typography>
      </Box>

      {/* Contenu centré */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
