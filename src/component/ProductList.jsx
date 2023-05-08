import React from "react";
import Product from "./Product.jsx";

export default function ProductList(props) {
  return props.phoneList.length >0 ?
  props.phoneList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        increment={props.increment}
        decrement={props.decrement}
        removeItem={props.removeItem}
        index={i}
      />
    );
  }) : <h1 className="text-center">No Products exist in the cart.</h1>
}
