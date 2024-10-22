import { Avatar, Box, Button, FormControl, Grid2, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../Context/Context';

export default function Form({categories,singleMenu,host}) {
    const {insertMenu,updateMenu} = useContext(AdminContext)
    const [formInfo,setFormInfo] = useState ({
                title:"",
                foodtype:null ,
                price:"",
                pictures:null,
                description:"",
                category:null,
                servings:"",
                status:null,
                
    })
    const [formError,setformError] = useState ({
                title:null,
                foodtype:null ,
                price:null,
                pictures:null,
                description:null,
                category:null,
                servings:null,
    });

    useEffect(() => {
      if (singleMenu) {
         setFormInfo(singleMenu)
      }else{
        setFormInfo({
          title:"",
                foodtype:null ,
                price:"",
                pictures:null,
                description:"",
                category:null,
                servings:"",
                status:null,
        });
      }
    },[singleMenu])

    const handleSubmit = () =>
         {
          if (formInfo?.title == "") {
            setformError({...formError,title:"please enter a title"})
          }  else if (formInfo?.description == "") {
            setformError({...formError,description:"please enter the description"})
          }else if (formInfo?.pictures == null) {
            setformError({...formError,pictures:"please upload a pictures"})
          }else if (formInfo?.foodtype == null) {
            setformError({...formError,foodtype:"please enter a foodtype"})
          }else if (formInfo?.category == null) {
            setformError({...formError,category:"please enter a category"})
          }else if (formInfo?.price == "") {
            setformError({...formError,price:"please enter the price"})
          }else if (formInfo?.servings == "") {
            setformError({...formError,servings:"please enter the servings"})
          }else{
            const Data = new FormData()
            Data.append("title",formInfo?.title);
            Data.append("pictures",formInfo?.pictures);
            Data.append("description",formInfo?.description);
            Data.append("foodtype",formInfo?.foodtype);
            Data.append("category",formInfo?.category);
            Data.append("price",formInfo?.price);
            Data.append("servings",formInfo?.servings);
            if (singleMenu) {
              Data.append("status",formInfo?.status);
              updateMenu(singleMenu?._id,Data)
            } else {
              insertMenu(Data)
            }
            
          }
         }
  return (
    <Box>
      <Paper elevation={2} sx={{flexGrow:1,p:3}}>
        <Grid2 container spacing={2}>
        {singleMenu && (
          <Grid2 item size={{sx:12,sm:12}}
          sx={{display:"flex",
            justifyContent:"center",
            alignItems:"center"}}>
            <Avatar src={`${host}/upload/admin/${singleMenu?.pictures}`} alt='picture' sx={{width:150,height:150}}/>
          </Grid2>
        )}
             <Grid2 item size={{sx:12,sm:6}}>
                  <TextField 
                  label="Menu Title" 
                  name='title' 
                  fullWidth 
                  onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} 
                  value={formInfo?.title}
                  helperText = {formError.title && formError.title}
                  error={!!formError.title}/>
             </Grid2>
             <Grid2 item size={{sx:12,sm:6}}>
                  <TextField 
                  label="Upload menu picture" 
                  name='pictures' 
                  type='file'
                  InputLabelProps={{shrink:true}}
                  fullWidth 
                  onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.files[0]});
                  }} 
                //   value={formInfo?.pictures}
                  helperText = {formError.pictures && formError.pictures}
                  error={!!formError.pictures}/>
             </Grid2>
             <Grid2 item size={{sx:12,sm:12}}>
                  <TextField 
                  label="Description" 
                  name='description' 
                 multiline
                 rows={2}
                 fullWidth 
                  onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} 
                  value={formInfo?.description}
                  helperText = {formError.description && formError.description}
                  error={!!formError.description}/>
             </Grid2>


             <Grid2 item size={{sx:12,sm:6}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Food Type</InputLabel>
                        <Select
                      l   abelId="demo-simple-select-label"
                          id="demo-simple-select"
                          onChange={(e) => {
                           setformError({...formError, [ e.target.name]: null});
                           setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                         }} 
                         value={formInfo?.foodtype}
                         helperText = {formError.foodtype && formError.foodtype}
                         error={!!formError.foodtype}
                         label="Food Type"
                         name='foodtype'
          
                        >
                      <MenuItem value={"veg"}>Veg</MenuItem>
                      <MenuItem value={"Non veg"}>Non veg</MenuItem>
          
                       </Select>
                 </FormControl>
             </Grid2>
             
             <Grid2 item size={{xs:12,sm:6}}>
             <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
        fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => {
            setformError({...formError, [ e.target.name]: null});
            setFormInfo({...formInfo, [ e.target.name]: e.target.value});
         }} 
         value={formInfo?.category}
         helperText = {formError.category && formError.category}
         error={!!formError.category}
          label="Category"
          name='category'
          
        >
            {categories?.map((category,index) => (
                <MenuItem key={index} value={category?._id}>{category?.title}</MenuItem>
            )
            )}
          
          <MenuItem value={"Non veg"}>Non veg</MenuItem>
          
        </Select>
      </FormControl>
             </Grid2>

             <Grid2 item size={{sx:12,sm:6}}>
                  <TextField 
                  label="Price" 
                  name='price' 
                  fullWidth 
                  onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} 
                  value={formInfo?.price}
                  helperText = {formError.price && formError.price}
                  error={!!formError.price}/>
             </Grid2>
             <Grid2 item size={{sx:12,sm:6}}>
                  <TextField 
                  label="Servings" 
                  name='servings' 
                  fullWidth 
                  onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} 
                  value={formInfo?.servings}
                  helperText = {formError.servings && formError.servings}
                  error={!!formError.servings}/>
            
             </Grid2>


             {singleMenu && (
              <Grid2 item size={{sx:12,sm:6}}>
             <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                      l   abelId="demo-simple-select-label"
                          id="demo-simple-select"
                          onChange={(e) => {
                           setformError({...formError, [ e.target.name]: null});
                           setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                         }} 
                         value={formInfo?.status}
                         
                         label="Status"
                         name='status'
          
                        >
                      <MenuItem value={"Available"}>Available</MenuItem>
                      <MenuItem value={"Unavailable"}>Unavailable</MenuItem>
          
                       </Select>
                 </FormControl>
         </Grid2>
             )}
             <Button 
             variant='contained' 
             fullWidth
             onClick={handleSubmit}
             sx={{p:1}}>
                Submit
             </Button>
        </Grid2>
      </Paper>
    </Box>
  )
}
