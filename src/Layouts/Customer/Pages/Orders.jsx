import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import PageBanner from "../Components/PageBanner";
import { CustomerContext } from "../Context/Context";
import OrderTaken from "../Components/NavBar/OrderTaken";

export default function Orders() {
  const {orders,getOrders} = useContext(CustomerContext);
  useEffect(() =>  {
    getOrders();
  },[]);
  console.log(orders)
  return (
    <Box>
      <Box>
        <PageBanner title="Orders" />
      </Box>
      <OrderTaken prders={orders}/>
    </Box>
  );
}
