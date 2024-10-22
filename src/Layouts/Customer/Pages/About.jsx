import { Box, Grid } from "@mui/material";
import React from "react";
import AboutContent from "../Components/Home/AboutContent";
import PageBanner from "../Components/PageBanner";
import Banner from "../Components/Home/Banner";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function About() {
  return (
    <Box>
      <Box>
        <PageBanner title="About Us" />
      </Box>
      <Box>
        <AboutContent />
      </Box>
      <Box>
        <Banner />
      </Box>
      
    </Box>
  );
}
