import React from 'react';
import ProductsApp from './components/ProductsApp';
import { makeStyles } from "@frontend-starter/ui-components";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '20px'
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
       <ProductsApp/>
    </div>
  );
}

export default App;
