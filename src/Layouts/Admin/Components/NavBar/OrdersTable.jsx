import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { Button, TextField, Typography } from '@mui/material';
import { AdminContext } from '../../Context/Context';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function OrdersTable({orders}) {
    const { updateOrderStatus} = React.useContext(AdminContext)
    const handleUpdateStatus = (id,condition) => {
        const updatedStatus = {};
        if(condition == "Approved") {
            updatedStatus.paymentStatus = "Paid";
            updatedStatus.orderStatus = "Confirmed"
        }
        if (condition == "Rejected") {
            updatedStatus.paymentStatus = "Paid";
            updatedStatus.orderStatus="Rejected";

        }
        if (condition == "Procecing") {
           
            updatedStatus.orderStatus="Procecing";

        }
        if (condition == "On the way") {
           
            updatedStatus.orderStatus="On the way";

        }
        if (condition == "Delivered") {
           
            updatedStatus.orderStatus="Delivered";

        }
        console.log(id,updatedStatus)
    };

    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell >Order By</TableCell>
            <TableCell >Details</TableCell>
            <TableCell >Total Amount Status</TableCell>
            <TableCell >Status </TableCell>
            <TableCell >Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {moment(row?.createdAt).format("DD-MM-YYYY")}
              </TableCell>
              <TableCell>
                {row?.customerId?.username}
              </TableCell>
              <TableCell>
                   {row?.name} 
                   <br/>
                   contact:{row?.phone}
                   <TextField 
                   fullWidth
                   multiline
                   rows={2}
                   readonly
                   value={`${row?.address}, ${row?.location},${row?.city},${row?.pin}`}/>
              </TableCell>
              <TableCell>
                {row?.menus?.map((item, index) => {
                    <div>
                      <li>
                        {item?.menuId?.title} * {item?.quantity}
                      </li>
                    </div>
                })}
              </TableCell>
              <TableCell >{row.totalAmount}</TableCell>
              <TableCell > 
                Payment -{row?.paymentStatus}
                <br/>
                Transaction -{row?.transactionStatus}
                <br/>
                Orders-{row.orderStatus}
              </TableCell>
              <TableCell > 
                {row?.orderStatus=="Placed" && (
                    <>
                    <Button
                variant='Cobtained'
                color='error'
                 onClick={() => handleUpdateStatus(row?._id,"Rejected")}>
                    Reject
                </Button>
                <Button
                variant='Cobtained'
                color='error'
                 onClick={() => handleUpdateStatus(row?._id,"Approved")}>
                    Approved
                </Button></>
                )}

                {row?.status == "Rejected " && (
                    <>
                    <Button
                variant='Cobtained'
                color='error'
                 onClick={() => handleUpdateStatus(row?._id,"Approved")}>
                    Approved
                </Button></>
                )}

                {row?.orderStatus == "Confiremed " && (
                    <>
                    <Button
                variant='Cobtained'
                color='error'
                 onClick={() => handleUpdateStatus(row?._id,"Procecing")}>
                    Procecsing
                </Button></>
                )}

               {row?.orderStatus == "Rejected " && (
                    <>
                    <Button
                variant='Cobtained'
                color='error'
                 onClick={() => handleUpdateStatus(row?._id,"On the way")}>
                    On the way
                </Button></>
                )}

                 {row?.orderStatus == "on the way " && (
                    <>
                    <Button
                variant='Cobtained'
                color='success'
                 onClick={() => handleUpdateStatus(row?._id,"Delivered")}>
                    Delivered
                </Button></>
                )}
                {row?.orderStatus == "Delivereed" && (
                     <Typography color='green'>Delivered </Typography>
                )}
                
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}