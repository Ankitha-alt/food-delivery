import {  Button, Card, Grid2, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { CustomerContext } from '../Context/Context';
import PageBanner from '../Components/PageBanner';
import background from "../Assets/food.jpg";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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

export default function CheckOut() {
  const [formInfo, setFormInfo] = useState({
             name: "", 
             phone: "",
             email: "",
             address: "",
             location: "",
             city: "",
             pin: "",
             message: "",
             

            });
  const [formError, setformError] = useState({
      name: null, 
      phone: null,
      email: null,
      address: null,
      location: null,
      city: null,
      pin: null,
      message: null,
  });
      const { viewCart, cart, host,placeOrder } = useContext(CustomerContext);
      useEffect(() => {
            viewCart();
      }, []);
      
      const totalAmount = cart?.reduce((acc,item) => {
            return acc + (item.quantity * item.menuId.price || 0);
      }, 0);      

const handleSubmit = () => {
      
      const menus=cart?.map((item) => {
            const data = {
                  menuId : item?.menuId?._id,
                  quantity : item?.quantity,
                  total : item?.quantity * item?.menuId?.price,
            };
            return data;
      });
      const updateOrder = {...formInfo,menus,totalAmount}
      placeOrder(updateOrder)
}
console.log(cart)
console.log(formInfo)
console.log(totalAmount)

     
      return (
            <Box >
                  <Box>
                        <PageBanner title="Check out" />
                  </Box>
                 
                  <Box mt={4} sx={{
                        flexGrow: 1, p: 5,
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: "no-repeat"
                  }} >
                        <Card sx={{ backgroundColor: '#2e4053', width: "650px" }} >
                              <Grid2 container spacing={2} p={5} >
                                    <Grid2 size={{ xs: 12, sm: 4 }}>
                                          <TextField sx={{ backgroundColor: 'white', borderRadius: '9px' }} fullWidth placeholder="Enter name" name="name" 
                                          onChange={(e) => {
                                                setformError({...formError, [ e.target.name]: null});
                                                setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                                             }}  />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 4 }}>
                                          <TextField sx={{ backgroundColor: 'white', borderRadius: '9px' }} fullWidth placeholder="Enter phone" name="phone" 
                                          onChange={(e) => {
                                                setformError({...formError, [ e.target.name]: null});
                                                setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                                             }} />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 4 }}>
                                          <TextField sx={{ backgroundColor: 'white', borderRadius: '9px' }} fullWidth placeholder="Enter Email" name="email" 
                                          onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12 }}>
                                          <TextField sx={{ backgroundColor: 'white', borderRadius: '9px' }} fullWidth placeholder="Enter Complete address" name="address" multiline rows={3} 
                                          onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} />
                                    </Grid2>

                                    <Grid2 size={{ xs: 12, sm: 4 }}>
                                          <TextField sx={{ backgroundColor: 'white', borderRadius: '9px' }} fullWidth placeholder="Enter location" name="location" 
                                          onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 4 }}>
                                          <TextField sx={{ backgroundColor: 'white', borderRadius: '9px' }} fullWidth placeholder="Enter city" name="city" 
                                          onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 4 }}>
                                          <TextField sx={{ backgroundColor: 'white', borderRadius: '9px' }} fullWidth placeholder="Enter pin" name="pin" 
                                          onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12 }}>
                                          <TextField sx={{ backgroundColor: 'white', borderRadius: '9px' }} fullWidth placeholder="Enter Message" name="message" multiline rows={3} 
                                          onChange={(e) => {
                     setformError({...formError, [ e.target.name]: null});
                     setFormInfo({...formInfo, [ e.target.name]: e.target.value});
                  }} />
                                    </Grid2>
                                    <Grid2 sx={{ justifyContent: "center", alignItems: 'center' }}>
                                          <Button 
                                          onClick={handleSubmit} sx={{ backgroundColor: '#e67e22', width: '100px' }} variant="contained" fullWidth >
                                                Submit
                                          </Button>
                                    </Grid2>

                              </Grid2>
                        </Card>
                        <Card p={5}>
                              
                        </Card>
                        
                  </Box>
            </Box>
      )
}
