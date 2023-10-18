"use client";

// react
import * as React from "react";

// @mui
import { Container, Typography } from "@mui/material";

// component
import ResponsiveAppBar from "../../components/app_bar";

export default function HomePage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <Typography sx={{ mt: 2 }}>Ini home page</Typography>
      </Container>
    </div>
  );
}
