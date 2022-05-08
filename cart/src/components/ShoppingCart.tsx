import React from "react";
import { GridContainer, makeStyles, Typography } from "@frontend-starter/ui-components";

const useStyles = makeStyles((theme) => ({
  outline: {
    border: '1px solid black',
    borderRadius: 8
  }
}))

const ShoppingCart = () => {
  const classes = useStyles();
  return <>
  <GridContainer className={classes.outline}>
    <Typography variant="h5" align="center">
      Shopping Cart
    </Typography>
    </GridContainer>
  </>
};

export default ShoppingCart;
