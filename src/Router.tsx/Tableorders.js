import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ status }) => ({
  backgroundColor: status === 'delivered' ? 'green' : status === 'Cancelled' ? 'red' : 'orange',
  color: 'white',
  borderRadius: '20px',
  padding: '2px 10px',
  fontSize: '0.75rem',
  textTransform: 'none',
  minWidth: '50px',
}));

const rows = [
  { id: 1, icon: '/images/image.png', customer: 'Wade Warren', no: '15478256', amount: '$124.00', status: 'delivered' },
  { id: 2, icon: '/images/image.png', customer: 'Jane Cooper', no: '48965786', amount: '$365.02', status: 'delivered' },
  { id: 3, icon: '/images/image.png', customer: 'Guy Hawkins', no: '78958215', amount: '$45.88', status: 'Cancelled' },
  { id: 4, icon: '/images/image.png', customer: 'Kristin Waston', no: '20965732', amount: '$65.00', status: 'pending' },
  { id: 5, icon: '/images/image.png', customer: 'Cody Fisher', no: '95715620', amount: '$545.00', status: 'delivered' },
  { id: 6, icon: '/images/image.png', customer: 'Savannah Nguyen', no: '78514568', amount: '$128.20', status: 'delivered' },
  { id: 7, icon: '/images/image.png', customer: 'Kristin Waston', no: '20965732', amount: '$65.00', status: 'pending' },
];

const TableOrder = () => {
  return (
    <div className='table'>
      <TableContainer component={Paper} style={{ maxHeight: 500, overflow: 'auto', backgroundColor: 'black' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'black' }}></TableCell>
              <TableCell sx={{ color: 'black' }}>Customer</TableCell>
              <TableCell sx={{ color: 'black' }}>Order No.</TableCell>
              <TableCell sx={{ color: 'black' }}>Amount</TableCell>
              <TableCell sx={{ color: 'black' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <img src={row.icon} alt='icon' width={20} height={20} />
                </TableCell>
                <TableCell sx={{ color: 'white' }}>{row.customer}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.no}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.amount}</TableCell>
                <TableCell>
                  <StyledButton status={row.status}>
                    {row.status}
                  </StyledButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableOrder;
