import { Box, Grid, Paper, styled, Typography, Button, Card } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import PageBanner from '../Components/PageBanner';

import { CustomerContext } from '../Context/Context';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import CartTheme from '../Components/CartTheme/CartTheme';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: '#1A2027',
  }),
}));

export default function Cart() {
  const navigate = useNavigate();
  const { viewCart, cart, host } = useContext(CustomerContext);
  useEffect(() => {
    viewCart();
  }, []);

  const totalItems = cart?.length;
  const totalPrice = cart?.reduce((total, item) => {
    const price = item.menuId?.price || 0; 
    const quantity = item.quantity || 0; 
    return total + price * quantity;
  }, 0);

console.log(cart)
  const handleCheckout = () => {
    navigate('/checkout'); 
  };


  return (
    <Box>
      <PageBanner title="Cart" />

      <Typography p={4}  sx={{fontWeight:'bold',fontSize:'40px'}}>
          Your <span style={{color:'orange'}}> 
          bag <ShoppingBagIcon style={{fontSize:30}}/>
      </span>
      </Typography>

      <Grid container spacing={2}>
        {cart?.length > 0 ? (
          cart.map((item, index) => (
            <Grid item xs={12} key={index}>
              <CartTheme menuInfo={item} host={host} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No items in cart</Typography>
        )}
      </Grid>

      <Box>
        <Card sx={{width:'100px',height:'50px'}}>
          <Typography>
            CART TOTAL
          </Typography>
          <Typography>
          Sub Total
          </Typography>
        </Card>
      </Box>

      {cart?.length > 0 && (
        <Grid item xs={12} mt={3}>
          <Item>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
             
              <Box mt={3} width="100%">
                
                <Button component={Link}
                to={"/checkOut"} variant="contained" color="primary" fullWidth
                onClick={handleCheckout}>
                  Checkout
                </Button>
              </Box>
            </Box>
          </Item>
        </Grid>
      )}
    </Box>
  );
}
