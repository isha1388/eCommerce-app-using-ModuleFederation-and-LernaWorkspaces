import React from 'react';
import Grid, {GridProps} from '@mui/material/Grid';

const GridItem = (props: GridProps): JSX.Element => {
  return <Grid item {...props} />
}

export default GridItem;