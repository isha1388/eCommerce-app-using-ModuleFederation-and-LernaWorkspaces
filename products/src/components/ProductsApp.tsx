import React from "react";
import {Product} from "@frontend-starter/sdk";

const Test = () => {
  const prod: Product = {
    id: 1,
    name: 'string',
    description: 'string',
    defaultImage: 'string',
    images: [''],
    price: 33,
    discount: 33
  }
  console.log('---------', prod);
  return (
    <p>Test Hello from PRODUCTS!!</p>
  );
};

export default Test;
