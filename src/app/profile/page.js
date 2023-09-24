"use client"

import ResponsiveAppBar from "../../../components/app_bar"

import { Container, Typography } from "@mui/material"

export default function ProfilePage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <Typography sx={{ mt: 2 }}>
          Ini profile page
        </Typography>
      </Container>
    </div>
  )
}