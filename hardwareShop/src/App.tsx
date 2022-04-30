import React, { Suspense } from 'react';
const ProductsApp = React.lazy(() => import("products/ProductsApp"));

function App() {
  return (
    <Suspense fallback={"loading..."}>
      Hello from Hardware Shop..
      <ProductsApp/>
    </Suspense>
  );
}

export default App;
