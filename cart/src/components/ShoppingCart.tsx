import React from "react";
import { GridContainer, makeStyles, Typography } from "@frontend-starter/ui-components";

const useStyles = makeStyles((theme) => ({
  scOutline: {
    border: '1px solid black',
    borderRadius: 8,
    height: '100%',
    maxHeight: '475px'
  }
}))

const ShoppingCart = () => {
  const classes = useStyles();
  return <>
  <GridContainer className={classes.scOutline}>
    <Typography variant="h5" align="center">
      Shopping Cart
    </Typography>
    </GridContainer>
  </>
};

export default ShoppingCart;
