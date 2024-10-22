import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AdminBreadcrumbs from "../Components/AdminBreadcrumbs";
import TableView from "../Components/Categories/TableView";
import InsertForm from "../Components/Categories/InsertForm";
import { AdminContext } from "../Context/Context";

export default function Categories() {
  const {getCategories,categories,host} = useContext(AdminContext);
  const [show,setShow] = useState (false)
  const [selectedCategory,setSelectedCategory] = useState(null)
  useEffect(() => {
    getCategories();
  },[]);
  return (
  <Box>
    <Box sx={{}}>
    <Box>
      <AdminBreadcrumbs isThird={true} thirdTitle={"Categories"}/>

    </Box>
    <Box sx={{display:'flex',justifyContent: "flex-end",}}>
      <Button 
      onClick={() =>{
        setShow(!show)
        setSelectedCategory(null)
      } 
    }
        color={show ? "error":"primary"}
        variant="contained" >
          {show?"close":"insert now"}
      </Button>
    </Box>
    </Box>
    {show && (
      <Box>
      <InsertForm show={show} selectedCategory={selectedCategory} setShow={setShow}/>
    </Box>
    )}
    <Box sx={{pt:2}}>
      <TableView categories={categories} host={host} setShow={setShow} setSelectedCategory={setSelectedCategory} />
    </Box>
  </Box>
  )
}
