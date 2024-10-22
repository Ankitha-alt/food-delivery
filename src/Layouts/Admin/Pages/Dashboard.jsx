import { Box } from "@mui/material";
import React from "react";
import AdminBreadcrumbs from "../Components/AdminBreadcrumbs";

export default function Dashboard() {
  return (
    <Box
    >
      <AdminBreadcrumbs isThird={true} thirdTitle={"Dashboard"}/>
    </Box>
  );
}
