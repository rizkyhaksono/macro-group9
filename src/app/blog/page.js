"use client";

// @mui
import { Container, Typography } from "@mui/material";

// components
import ResponsiveAppBar from "../../../components/app_bar";

export default function BlogPage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <Typography sx={{ mt: 2 }}>Ini blog page</Typography>
      </Container>
    </div>
  );
}
