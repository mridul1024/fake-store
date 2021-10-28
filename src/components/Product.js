import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

export default function Product({ product }) {
  // // const product = useSelector((state) => state.allProducts.products);
  // const dispatch = useDispatch();
  // //const { id, name, occupation } = product[0];
  // const getData = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((error) => console.log(error));
  //   dispatch(setProducts(response.data));
  // };
  // useEffect(() => {
  //   getData();
  // });
  return (
    <div>
      <h2>{product}</h2>
    </div>
  );
}
