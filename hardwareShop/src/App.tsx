import React, { Suspense } from 'react';
// import { Route, Switch, Router, withRouter } from "react-router-dom";
import { GridItem, GridContainer, makeStyles, Typography } from "@frontend-starter/ui-components";
const ProductsApp = React.lazy(() => import("products/ProductsApp"));
const ShoppingCart = React.lazy(() => import("cart/ShoppingCart"));

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: '100%'
  },
  hsOutline: {
    border: '1px solid black',
    borderRadius: 8
  },
  productsWrapper: {
    padding: '20px',
    overflow: 'auto'
  },
  shoppingCartWrapper: {
    paddingTop: '20px'
  }
}))

function App2() {
  const classes = useStyles();
  return (
    <Suspense fallback={"loading..."}>
      <GridContainer direction={"row"}>
        <GridItem className={`${classes.fullWidth} ${classes.hsOutline}`}>
          <Typography variant="h4" align="center">
            Smart Hardware Shop
          </Typography>
        </GridItem>
        <GridItem className={`${classes.fullWidth}`}>
          <GridContainer columnSpacing={1}>
            <GridItem className={classes.productsWrapper} xs={8}><ProductsApp /></GridItem>
            <GridItem className={classes.shoppingCartWrapper} xs={4}><ShoppingCart /></GridItem>
          </GridContainer></GridItem>
      </GridContainer>
    </Suspense>
  );
}

// function App() {
//   return (
//     // <Router>
//       <Switch>
//       {/* <Route path="/:id" children={<App2 />} /> */}
//       <Route path="/" children={<App2 />} />
//       </Switch>
//     // </Router>
//   )
// }

export default App2;
