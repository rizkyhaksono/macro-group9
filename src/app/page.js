"use client"

// react
import * as React from 'react'

import Link from 'next/link';

// @mui
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';

// component
import ResponsiveAppBar from '../../components/app_bar';

export default function HomePage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container>
        <Typography sx={{ mt: 2 }}>
          Ini home page
        </Typography>
      </Container>
    </div>   
  )
}