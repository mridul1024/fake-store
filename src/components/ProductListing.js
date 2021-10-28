import React from "react";
import Product from "./Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

export default function ProductListing() {
  const product = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  let loading = false;
  //const { id, name, occupation } = product[0];
  const getData = async () => {
    loading = true;
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log(error));
    dispatch(setProducts(response.data));
    loading = false;
  };
  useEffect(() => {
    if (loading === false) {
      getData();
    }
  }, []);
  return (
    <div>
      <h2>Product Listing</h2>
      {product.map((item) => (
        <Product product={item.title} />
      ))}
    </div>
  );
}
