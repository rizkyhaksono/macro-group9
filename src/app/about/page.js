"use client";

// @mui
import { Container, Typography } from "@mui/material";

// components
import ResponsiveAppBar from "../../../components/app_bar";

export default function AboutPage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <Typography sx={{ mt: 2 }}>Ini about page</Typography>
      </Container>
    </div>
  );
}
