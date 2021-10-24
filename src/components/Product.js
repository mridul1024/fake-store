import React from "react";
import { useSelector } from "react-redux";

export default function Product() {
  const product = useSelector((state) => state.allProducts.products);
  const { id, name, occupation } = product[0];
  return (
    <div>
      <h2>Product {id}</h2>
      <p>{name}</p>
      <p>{occupation}</p>
    </div>
  );
}
