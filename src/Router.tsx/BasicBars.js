import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BasicBars=() => {
  return (
    <BarChart
      className='Basic-bars'
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C','group D','group E','group F'] }]}
      series={[{ data: [4, 3, 5,4,2,1] }, { data: [1, 6, 3,3,5,2] }, { data: [2, 5, 6,6,4,5] },{ data: [4, 3, 4,2,3,5] }]}
      width={830}
      height={250}
    />
  );
}
export default BasicBars;
