"use client";

// components
import ResponsiveAppBar from "../../../components/app_bar";

// @mui
import { Container, Typography } from "@mui/material";

export default function SettingPage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <Typography sx={{ mt: 2 }}>Ini settings page</Typography>
      </Container>
    </div>
  );
}
