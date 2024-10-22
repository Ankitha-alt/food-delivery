import { Box, Card, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, styled, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import MenuCard from './MenuCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function MenuCollections({ menus, categories }) {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filterMenus,setFilterMenus] = useState([])
  
  useEffect(() => {
     const filterMenus = () => {
      var allMenus=menus;
      if (search) {
        allMenus= menus?.filter((menu) => 
          menu?.title?.toLowerCase().includes(search?.toLocaleLowerCase())
      );
    }else if (selectedCategory != "All") {
      allMenus = menus?.filter(
        (menu) => menu?.category?._id === selectedCategory
      );
      
    }else {
      allMenus = menus;
    }
    setFilterMenus(allMenus);
     }
     filterMenus();       
  },[search,selectedCategory,menus])
  
  console.log(categories)
  console.log(menus)
  return (
    <Box>

      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} p={5}>
            <Grid item xs={8}>
              <Item>
                <TextField label="Search products here.." 
                fullWidth 
                onChange={(e) => setSearch(e.target.value)}/>
              </Item>
            </Grid>
            <Grid item xs={4}>
            <Item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter by category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedCategory}
                  label="Age"
                  onChange={(e) => {
                    setSelectedCategory(e.target.value)
                  }}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  {categories?.map((category, index) => (
                    <MenuItem key={index} value={category?._id}>{category?.title}</MenuItem>
                  ))}


                </Select>
              </FormControl>
              </Item>
            </Grid >
            <Grid item xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,flexWrap:"wrap"
              }}>
              {filterMenus?.map((menu, index) => (
                <MenuCard key={index} menuInfo={menu} />
              ))}

            </Grid>

          </Grid>
        </Box>

      </Box>
    </Box>
  )
}
