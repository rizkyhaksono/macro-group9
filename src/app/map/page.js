"use client";

// @mui
import { Container, Typography } from "@mui/material";

// components
import ResponsiveAppBar from "../../../components/app_bar";

export default function MapPage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <Typography sx={{ mt: 2 }}>Ini map page</Typography>
      </Container>
    </div>
  );
}
