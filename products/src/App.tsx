import React from 'react';
import ProductsApp from './components/ProductsApp';
import { makeStyles, ErrorBoundary } from "@frontend-starter/ui-components";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '20px'
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {/* <ErrorBoundary> */}
        <ProductsApp />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
