import React from "react";
import { useQuery } from "react-query";
import { Product } from "@frontend-starter/sdk";
import { Api } from "@frontend-starter/sdk";
import { GridContainer, makeStyles, Typography } from "@frontend-starter/ui-components";

const useStyles = makeStyles((theme) => ({
  outline: {
    border: '1px solid black',
    borderRadius: 8
  }
}))

type ProductsResp = {
  data: Product[]
};

const getProducts = async (): Promise<ProductsResp> => {
  return await Api.getRecommendedProducts();
}

const ShoppingCart = () => {
  const { data, isLoading, error } = useQuery<ProductsResp>(
    "getProducts",
    getProducts
  );
  const classes = useStyles();
  console.log('######dattttaaa', data);
  // if (isLoading) return <LinearProgress />;
  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Something went wrong ...</div>;
  return <>
  <GridContainer className={classes.outline}>
    <Typography variant="h5" align="center">
      Shopping Cart
    </Typography>
    </GridContainer>
  </>
};

export default ShoppingCart;
