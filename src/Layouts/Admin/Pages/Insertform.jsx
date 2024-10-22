import { Box, Button, Grid2, Paper, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../Context/Context';
import AdminBreadcrumbs from '../Components/AdminBreadcrumbs';
import Form from '../Components/Menu/Form';
import { useParams } from 'react-router-dom';


export default function Insertform({setShow}) {
  const {id} = useParams()
  // console.log(id)
  const {getCategories,categories,getSingleMenus,singleMenu,setSingleMenu,host} = useContext(AdminContext)
  useEffect(()=> {
    getCategories();
    if (id) {
      getSingleMenus(id);
    }else{
      setSingleMenu(null)
    }
  },[id])
  console.log(singleMenu)
  // console.log(categories)
  return (
    <Box>
      <Box>
      <AdminBreadcrumbs isSecond ={true} secondTitle={"Menus"} secondPath={"/Admin/Menus"} isThird={true} thirdTitle={id? "Update Menu":"Insert New Menu"}/>
      </Box>
      
      <Box sx={{p:2}}>
        <Form singleMenu={singleMenu} host={host} categories={categories}/>
      </Box>
    </Box>
  )
}
