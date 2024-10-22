import React from "react";
import AdminBreadcrumbs from "../Components/AdminBreadcrumbs";
import { Box } from "@mui/material";

export default function Customers() {
  return (
  <Box>
    <AdminBreadcrumbs isThird={true} thirdTitle={"Customer"}/>
  </Box>)
}
