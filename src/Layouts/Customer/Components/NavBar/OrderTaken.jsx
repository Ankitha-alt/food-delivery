import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';

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

export default function OrderTaken({orders}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell >Menu</TableCell>
            <TableCell >Total Amount</TableCell>
            <TableCell >Payment Status</TableCell>
            <TableCell >Order </TableCell>
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
                {row?.menus?.map((item, index) => {
                    <div>
                      <li>
                        {item?.menuId?.title} * {item?.quantity}
                      </li>
                    </div>
                })}
              </TableCell>
              <TableCell align="right">{row.totalAmount}</TableCell>
              <TableCell align="right">{row.paymentStatus}</TableCell>
              <TableCell align="right">{row.orderStatus}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}