import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import about from "../../Assets/about2.jpg";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HistoryIcon from '@mui/icons-material/History';
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
export default function AboutContent() {
  return (
    <Box
      sx={{
        backgroundColor: "#fda50014",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 2, sm: 5 },
      }}
    >
      <Grid container spacing={2} sx={{ width: "90%" }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                px: 3,
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "left",
                width: "100%",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "900",
                  p:3
                }}
              >
                About <span style={{ color: "orange" }}>Us</span>
              </Typography>
            </Box>
            <Box sx={{ p: 3,height:'50vh',width:'80vh'}} >
            <Grid container spacing={5}>
      <Grid item xs={12} sm={4} >
            <Box display="flex" justifyContent="center" alignItems="center" gap={2} p={3}>
            <LocalShippingIcon sx={{backgroundColor:'orange', padding:3,borderRadius:"15px",fontSize:"70px"}}/>
            <Box>
            <Typography fontWeight="bold">
              Fast Delivery
            </Typography>
            <Typography color="text.secondary">
            Experience lightning-fast delivery service that ensures your orders arrive at your
            doorstep in no time.
            </Typography>
            </Box>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" gap={2} p={3}>
            <HistoryIcon sx={{backgroundColor:'orange', padding:3,borderRadius:"15px",fontSize:"70px"}}/>
            <Box>
            <Typography fontWeight="bold">
              On Time Delivery
            </Typography>
            <Typography color="text.secondary">
            Our dedicated team works tirelessly to ensure that your orders arrive exactly when promised.
            </Typography>
            </Box>
            </Box>
      </Grid>
      </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ p: 3 }}>
          <Box
            sx={{
              width: "100%",
              backgroundImage: `url(${about})`,
              height: { xs: "40vh", sm: "60vh" },
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
