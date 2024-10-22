import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Grid2, Typography } from '@mui/material';
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

export default function RelatedMenus({menus}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Typography p={2} sx={{textAlign:"center",fontWeight:'600',fontSize:17}}  variant='overline'>
            Related Menus
        </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{justifyContent:'center',alignItems:'center'}}>
            <Grid2 container spacing={2} 
            sx={{
              pt:5,
              display: 'flex',
              justifyContent: 'center',
              gap: 3,flexWrap:"wrap"
            }}
            >
                {menus?.map((menu,index)=>(
                   <Grid size={3} key={index} 
                   sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,flexWrap:"wrap"
                  }}>
                     <MenuCard menuInfo={menu}/>
                   </Grid>
                ))}
               
            </Grid2>
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}
