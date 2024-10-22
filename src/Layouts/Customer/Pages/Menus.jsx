import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";

import { AdminContext } from "../../Admin/Context/Context";
import MenuCollections from "../Components/Menus/MenuCollections";
import MenuCard from "../Components/Menus/MenuCard";
import { CustomerContext } from "../Context/Context";

export default function Menus() {

  const {menus,
    customer,categories,
    getCategoriesAndProducts} = useContext(CustomerContext);

    useEffect (() => {
      getCategoriesAndProducts()
    },[])
  
  return (
    <Box>
      <Box>
        <PageBanner title="Menu" />
      </Box>
    <Box>
    <MenuCollections menus={menus} categories={categories}/>
    </Box>
   </Box>
  );
}
