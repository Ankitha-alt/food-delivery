import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


import { useContext } from 'react';

import pic from "../Assets/login.jpg";
import { AdminContext } from '../Context/Context';



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



export default function Login() {
    
    const {adminLogin} = useContext(AdminContext);
    const [formInfo, setformInfo] = useState({ username: "", password: "" });
    const [formError, setformError] = useState({ username: null, password: null });

    const handleChange = (e) => {
        setformError({ ...formError, [e.target.name]: null })
        setformInfo({ ...formInfo, [e.target.name]: e.target.value })

    };
    const handleSubmit = () => {
        if (formInfo.username == "") {
            setformError({ ...formError, username: "username is required!" })
        } else if (formInfo.password == "") {
            setformError({ ...formError, password: "password is required!" })
        } else {
            setformError({ username: null, password: null });
            adminLogin(formInfo)
            

        }
    };
    const TransparentTextField = styled(TextField)({
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
        border: '1px solid rgba(255, 255, 255, 0.5)', // Semi-transparent border
        '& .MuiInputBase-input': {
            color: 'white', // Text color
        },
        '& .MuiInputBase-input::placeholder': {
            color: 'rgba(255, 255, 255, 0.7)', // Placeholder color
        },
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Change on hover
        },
    });


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid size={6} sx={{ 
                            backgroundImage: `url(${pic})`,                         
                            backgroundSize:'cover'
                    }}>
                        
                      
                    </Grid>
                    <Grid size={6} sx={{ height: "100vh" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                height: "100vh"
                            }}>
                            <Box sx={{ width: "70%", mb: 2 }}>
                                <Typography variant='h4' sx={{ fontWeight: "900" }}>Admin SignIn</Typography>
                            </Box>
                            
                            <Box sx={{ width: "70%", mb: 2 }}>
                                <TextField onChange={handleChange}
                                
                                    helperText={formError.username && formError.username}
                                    error={!!formError.username}
                                    fullWidth name="username"
                                    label="Enter your username" 
                                    sx={{borderRadius:'100px'}}/>
                            </Box>
                            <Box sx={{ width: "70%", mb: 2 }}>
                                <TextField onChange={handleChange}
                                    helperText={formError.password && formError.password}
                                    error={!!formError.password}
                                    fullWidth name="password" label="Enter your password" />
                            </Box>
                            <Box sx={{ width: "70%", mb: 2 }}>
                                <Button onClick={handleSubmit}
                                    fullWidth variant='contained' sx={{ p: 1 ,borderRadius:'100px',backgroundColor:'#FDE992'}}> Sign In</Button>
                            </Box>
                            
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            
            
        
        </div>
    )
}