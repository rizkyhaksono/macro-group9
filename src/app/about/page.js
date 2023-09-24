"use client"

import ResponsiveAppBar from "../../../components/app_bar"

import { Container, Typography } from "@mui/material"

export default function AboutPage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <Typography sx={{ mt: 2 }}>
          Ini about page
        </Typography>
      </Container>
    </div>
  )
}

