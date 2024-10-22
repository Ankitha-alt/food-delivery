import { Box, Button, Grid2, Paper, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../Context/Context';

export default function InsertForm({setShow,selectedCategory,show}) {
  console.log(selectedCategory)
  const { insertCategories,updateCategories } = useContext(AdminContext)
  const [formInfo, setFormInfo] = useState({ title: "", picture: null });
  const [formError, setformError] = useState({ title: null, picture: null });


useEffect(() => {
  if(selectedCategory){
    setFormInfo(selectedCategory);
  }
},[selectedCategory])
  const handleSubmit = () => {
    if (formInfo.title == "") {
      setformError({ ...formError, title: "Please enter title" })
    } else if (formInfo.picture == null) {
      setformError({ ...formError, picture: "Please upload a picture" })
    } else {
      setformError({ title: null, picture: null });
      const Data = new FormData();
      Data.append("title", formInfo.title)
      Data.append("picture", formInfo.picture)
      if (selectedCategory) {
        updateCategories(selectedCategory?._id,Data)
      }else{
        insertCategories(Data)
      }
      
      setFormInfo({title:"",picture:null});
      setShow((prev)=>!prev)


    }
  }
  return (
    <Paper sx={{ p: 2 }}>
      <Box >
        <Grid2 sx={{ display: "flex", gap: 2 }}>

          <TextField
            onChange={(e) => {
              setformError({ ...formError, [e.target.name]: null })
              setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
            }}
            value={formInfo?.title}
            fullWidth
            label="Enter category Title"
            name="title"
            helperText={formError.title && formError.title}
            error={!!formError.title} />

          <TextField
            onChange={(e) => {
              setformError({ ...formError, [e.target.name]: null })
              setFormInfo({ ...formInfo, [e.target.name]: e.target.files[0] })
            }}
            fullWidth
            label="Upload category  picture"
            name="picture"
            type='file'
            InputLabelProps={{ shrink: true }}
            helperText={formError.picture && formError.picture}
            error={!!formError.picture} />


          <Button onClick={handleSubmit} variant='contained' sx={{ width: 400 }}>
            Submit
          </Button>
        </Grid2>
      </Box>
    </Paper>
  )
}
