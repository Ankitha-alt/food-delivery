import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PageBanner from "../Components/PageBanner";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import contact from '../Assets/about-4.jpg'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

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
export default function Contact() {
  let navigate = useNavigate();
  const [formInfo, setformInfo] = useState({ cname: "", message: "",email: "",phone: "", });
  const [formError, setformError] = useState({
    cname: null,
    email: null,
    phone: null,
    message: null,
  });

  const handleChange = (e) => {
    setformError({ ...formError, [e.target.name]: null });
    setformInfo({ ...formInfo, [e.target.name]: e.target.value });
  };
  
  
  const handleSubmit = () => {
    if (formInfo.cname == "") {
      setformError({ ...formError, cname: "Name is required!" });
    } else if (formInfo.email == "") {
      setformError({ ...formError, email: "Email is required!" });
    } else if (formInfo.phone == "") {
      setformError({ ...formError, phone: "Phone no is required!" });
    } else if (formInfo.message == "") {
      setformError({ ...formError, message: "Message is required!" });  
    } else {
      setformError({
        cname: null,
        email: null,
        phone: null,
        message: null,
      });
      console.log(formInfo)
    
    axios
        .post("http://localhost:7000/feedback/customerFeedback",formInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            localStorage.setItem(
              "customeFeedToken",
              JSON.stringify(res.data.token)
            );
            toast.success(res.data.message)
            navigate("/Customer/Home");
          }else{
            toast.error(res.data.message)
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }
  };
  return (
    <Box>
      <Box>
        <PageBanner title="Contact Us" />
      </Box>
      <Box sx={{ p: 3 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.31722005161!2d74.76966120007422!3d12.923146607058982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1726900807747!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Box>
      <Grid container spacing={2} >
        <Grid item xs={6} sx={{ display:'flex',flexDirection:'row' ,justifyContent:'center',alignItems:'center',p:4}}>
          <Box  sx={{width: '100%',
            height: 'auto',m:5
            // backgroundImage:`url(${contact})`
            }}>
                <Typography variant="h5" sx={{color:'#CC6600',fontWeight:'900',pb:3}}>
                  How Can We Help You?
                </Typography>
                <Typography variant="p" sx={{color:'#ff9933'}}>
                At Foodure, we’re dedicated to providing you with the support you need. Whether you have questions, need assistance, or are looking for resources, we’re here for you!
                </Typography>
                <Box pt={5} display="flex" sx={{color:'#CC6600'}} gap={2} >
                
                <PhoneOutlinedIcon sx={{p:1, backgroundColor:'#ff9933',borderRadius:'50px',color:'white'}}/> 
                <Typography >+91 9853520169</Typography>
                
                </Box>
                <Box pt={5} display="flex" sx={{color:'#CC6600'}} gap={2} >
                
                <EmailIcon sx={{p:1, backgroundColor:'#ff9933',borderRadius:'50px',color:'white'}}/> 
                foodure@gmail.com
                
                </Box>
                

          </Box>
        </Grid>

        <Grid item xs={6} sx={{ display:'flex',flexDirection:'column' ,justifyContent:'center',alignItems:'center',p:4}}>
          <Box sx={{backgroundColor:'#ff9933',p:3,borderRadius:'10px'}} >
          <Typography variant="h5" color="textSecondary" fontWeight={900} mb={3} >
            Give Us a Message
            </Typography>
            <form >
              <Box mb={3} sx={{display:'flex',}} gap={2}>
              <TextField 
              onChange={handleChange}
              helperText={formError.cname && formError.cname}
              error={!!formError.cname}
              sx={{backgroundColor:'white',borderRadius:"10px",outline:'remove'}}
              name='cname' 
              placeholder="Name"/>

              <TextField 
              onChange={handleChange}
              helperText={formError.email && formError.email}
              error={!!formError.email}
              sx={{backgroundColor:'white',borderRadius:"10px",outline:'remove'}} placeholder="Email"
              name='email' /> 

              <TextField 
              onChange={handleChange}
              helperText={formError.phone && formError.phone}
              error={!!formError.phone}
              sx={{backgroundColor:'white',borderRadius:"10px",outline:'remove'}} placeholder="Phone"
              name='phone'/>
              
              </Box>
                  
              <Box mb={3}>
              <TextField 
              onChange={handleChange}
              helperText={formError.message && formError.message}
              error={!!formError.message}
              fullWidth
              sx={{backgroundColor:'white',borderRadius:"10px",outline:'remove'}} placeholder="Message" multiline rows={4}
              name='message'/>
              </Box>
              

              <Box mb={3}>
              <Button variant="contained" onClick={handleSubmit} sx={{borderRadius:'30px',backgroundColor:'#CC6600',width:'100px',color:'white'}}>
                Send
              </Button>

              </Box>
            </form>
          </Box>
        </Grid>
        
      </Grid>
      </Box>
    </Box>
  );
}
