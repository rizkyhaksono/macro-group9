"use client";

// react
import * as React from "react";

// next
import Image from "next/image";

// @mui
import { Container, Typography, Button } from "@mui/material";

// component
import ResponsiveAppBar from "../../components/app_bar";

export default function HomePage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container className="bg-white py-4 mx-auto">
        <div className="grid grid-cols-2">
          <div className="flex flex-col space-y-8 self-center">
            <Typography className="font-black text-4xl" sx={{ color: "#074C06" }}>
              Daur Ulang Menjadi Lebih Mudah
            </Typography>
            <Typography className="font-normal text-base" sx={{ color: "#40AD3E" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officiis totam distinctio quam itaque corrupti provident quaerat nobis fugit ad alias laboriosam, placeat pariatur odit recusandae voluptatem porro, rerum fuga!
              Officiis libero velit consectetur accusantium tempore. Reprehenderit optio atque autem.
            </Typography>
          </div>
          <div>
            <Image width={500} height={100} src="/illustration.png" alt="Illustration" className="object-cover mx-auto my-auto"></Image>
          </div>
        </div>
        <Button variant="contained" color="inherit" size="large" sx={{ "& button": { m: 1 }, color: "#40AD3E" }}>
          Selengkapnya
        </Button>
      </Container>
    </div>
  );
}
