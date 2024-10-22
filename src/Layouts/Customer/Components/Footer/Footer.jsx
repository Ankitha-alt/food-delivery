import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { colors, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Footer() {
  return (
    <Box
      sx={{ backgroundColor: "#f6d993", p: { xs: 3, sm: 8 }, pt: { xs: 4 } }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Box>
          <Typography variant="body2" gutterBottom  style={{color: "#b1793d",fontWeight:'bold'}}>
            ABOUT
          </Typography>
          <Grid style={{display:"flex",flexDirection:"column"}}>
          <Link href="/helpcentre" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Contact Us
          </Link>
          <Link href="https://corporate.flipkart.net/corporate-home" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            About Us
          </Link>
          <Link href="https://www.flipkartcareers.com/" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Careers
          </Link>
          <Link href="http://stories.flipkart.com/" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Foodure Stories
          </Link>
          <Link href="http://stories.flipkart.com/category/top-stories/news/" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Press
          </Link>
          <Link href="/corporate-information" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Corporate Information
          </Link>
          </Grid>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }}>
        <Typography variant="body2" gutterBottom style={{color: "#b1793d",fontWeight:'bold'}}>
            GROUP COMPANIES
          </Typography>
          <Grid style={{display:"flex",flexDirection:"column"}}>
          <Link href="https://www.myntra.com/" variant="body2" color="textSecondary" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}} >
            Swiggy
          </Link>
          <Link href="https://www.cleartrip.com/" variant="body2" color="textSecondary" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Zometo
          </Link>
          <Link href="https://www.shopsy.in" variant="body2" color="textSecondary" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Deliver
          </Link>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }}>
        <Typography variant="body2" gutterBottom style={{color: "#b1793d",fontWeight:'bold'}}>
            HELP
          </Typography>
          <Grid style={{display:"flex",flexDirection:"column"}}>
          <Link href="/pages/payments" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Payments
          </Link>
          <Link href="/pages/shipping" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Shipping
          </Link>
          <Link href="/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Cancellation & Returns
          </Link>
          <Link href="/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            FAQ
          </Link>
          <Link href="https://seller.flipkart.com/fiv" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Report Infringement
          </Link>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }}>
        <Typography variant="body2" gutterBottom style={{color: "#b1793d",fontWeight:'bold'}}>
            HELP
          </Typography>
          <Grid style={{display:"flex",flexDirection:"column"}}>
          <Link href="/pages/returnpolicy" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Payments
          </Link>
          <Link href="/pages/terms" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Delivery
          </Link>
          <Link href="/pages/paymentsecurity" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Customer care
          </Link>
          <Link href="/pages/privacypolicy" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            Shipping
          </Link>
          <Link href="/pages/ewaste-compliance-tnc" variant="body2" color="textSecondary" style={{textDecoration:"none",color: "#b1793d",fontSize:"13px"}}>
            FAQ
          </Link>
         
          </Grid>
        </Grid>
      </Grid>
      <hr style={{width:"50%" ,marginTop:"30px",color:'white'}}/>
      <Grid item xs={12} md={3} sx={{alignItems:'center',justifyContent:'center',display:"flex"}}>
      <Link md={12} style={{textDecoration:"none",color:"#b1793d",fontSize:"10px"}}>2007-2024 All Rights Reserved. BrandBucket® is a registered trademark of BrandBucket Inc.</Link>

      </Grid >
      <Grid item xs={12} md={3} sx={{alignItems:'center',justifyContent:'center',display:"flex",gap:2,marginTop:3}}>
<TwitterIcon sx={{p:2, backgroundColor:'"#b1793d"',borderRadius:'50px'}}/>
<YouTubeIcon sx={{p:2, backgroundColor:'"#b1793d"',borderRadius:'50px'}}/>
<XIcon sx={{p:2, backgroundColor:'"#b1793d"',borderRadius:'50px'}}/>
      </Grid >
    </Box>
  );
}
