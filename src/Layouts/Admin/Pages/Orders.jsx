import React, { useEffect } from "react";
import AdminBreadcrumbs from "../Components/AdminBreadcrumbs";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AdminContext } from "../Context/Context";
import OrdersTable from "../Components/NavBar/OrdersTable";

export default function Orders() {
  const {getOrders,orders} = useContext(AdminContext)
  useEffect(() =>  {
    getOrders();
  },[]);
  console.log(orders)
  return (
 <Box>
   <Box
  >
    <AdminBreadcrumbs isThird={true} thirdTitle={"Orders"}/>
  </Box>
  <Box p={4}>
    <OrdersTable orders={orders}/>
  </Box>
 </Box>
  )
}
