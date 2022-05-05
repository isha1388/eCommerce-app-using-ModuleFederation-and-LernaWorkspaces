import React from 'react';
import Grid, {GridProps} from '@mui/material/Grid';

const GridContainer = (props: GridProps): JSX.Element => {
  return <Grid container {...props} />
}

export default GridContainer;