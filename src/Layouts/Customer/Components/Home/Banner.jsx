import React from "react";
import bannerBg from "../../Assets/food.jpg";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Banner() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "50vh", sm: "80vh" },
        backgroundImage: `url(${bannerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "50vh", sm: "80vh" },
          backgroundColor: "#fdaa003d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        {/* <Typography variant="h1">asdfghjk</Typography> */}

        <Box sx={{width:'100%',height:'80vh', }}>
                    <Box sx={{height:"50vh",width:"20%", backgroundColor:'white',borderRadius:'30px',m:5,p:5,}}>
                      
                      <Typography variant='h4' sx={{fontWeight:'bold'}}>
                      "Savor Every Bite, Delivered Fast!"
                      </Typography>

                      <Box sx={{pt:5}}>
                      <Typography variant='p' sx={{pt:5,}}>
                       Our reliable delivery service ensures your food arrives fresh and hot, making every meal an enjoyable experience. 
                       </Typography>
                      </Box>
                      <Box sx={{pt:5}}>
                      {/* <Button elevation variant="contained" sx={{backgroundColor:'transparent',borderRadius:'15px',color:'#20B2AA'}} href='/contact'>
                        Get Help <ArrowForwardIcon sx={{fontSize:"15px",pl:1}}/>
                      </Button> */}
                      </Box>
                       
                    </Box>
            </Box>
      </Box>
    </Box>
  );
}
