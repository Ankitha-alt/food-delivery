import { Avatar, Box, Typography, IconButton, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import { CustomerContext } from "../../Context/Context";

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

export default function CartTheme({ host, menuInfo }) {
  const [quantity, setQuantity,] = useState(menuInfo.quantity || 1);
  const {removeMenuFromCart,updateCartQuantity} = useContext(CustomerContext)
console.log(menuInfo)
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemove = () => {
    console.log("Item removed");
  };

  if (!menuInfo?.menuId) {
    return <Typography variant="body1">Loading item...</Typography>;
  }

  const totalPrice = menuInfo?.quantity * (menuInfo?.menuId?.price || 0);

  const handleQuantity = (qty,condition,id) => {
    // console.log(qty);
    var quantity = 0;
    if (condition == "Pluse") {
      quantity = +qty + +1;
    } else {
      quantity = +qty - +1;
    }
    updateCartQuantity(id,quantity)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Avatar
                src={`${host}/upload/customer/${menuInfo.menuId?.pictures}`}
                variant="square"
                sx={{ width: 100, height: 100 }}
              />
              <Box ml={2} textAlign="left">
                <Typography variant="h6">{menuInfo?.menuId?.title }</Typography>
                <Typography variant="body1">Price: ₹{menuInfo?.menuId?.price }</Typography>
                <Typography variant="body1">Servings: {menuInfo?.menuId?.servings }</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Button 
                disabled={
                  menuInfo?.quantity == 1 || menuInfo?.quantity<1
                  ? true
                  : false
                }
                // onClick={handleDecrement}
                onClick={() => handleQuantity(menuInfo?.quantity,"Minus" ,menuInfo?._id)}
                >
                  <RemoveIcon />
                </Button>
                <Typography variant="body1" sx={{ margin: '0 10px' }}>{menuInfo?.quantity}</Typography>
                <Button 
                onClick={() => handleQuantity(menuInfo?.quantity,"Pluse" ,menuInfo?._id )}
                // onClick={handleIncrement}
                
                >
                  <AddIcon />
                </Button>
              </Box>
              <Button onClick={() => removeMenuFromCart(menuInfo?._id)} 
              color="error" >
                x
              </Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
