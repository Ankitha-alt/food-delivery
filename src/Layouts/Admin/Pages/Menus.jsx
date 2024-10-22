import React, { useContext, useEffect } from "react";
import AdminBreadcrumbs from "../Components/AdminBreadcrumbs";
import { Box, Button } from "@mui/material";
import Insertform from "./Insertform";
import Tableview from "../Components/Menu/Tableview";
import { Link } from "react-router-dom";
import { AdminContext } from "../Context/Context";

export default function Menus() {
  const {getMenus,menus,host} = useContext(AdminContext)

  useEffect(()=> {
getMenus();
  },[]);
  return (
  <Box>
    <Box sx={{display:'flex',justifyContent: "space-between",}}>
    <Box>
    <AdminBreadcrumbs isThird={true} thirdTitle={"Menus"}/>
  </Box>
  <Box>
    <Button component={Link} to={`/Admin/Insertform`} variant="contained">
      Insert New
    </Button>
  </Box>
    </Box>
  
  
    
    
    <Box sx={{p:2}}>
      <Tableview menus={menus} host={host}/>
    </Box>
  </Box>
)}
