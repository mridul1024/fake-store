import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";
import { selectedProduct } from "../redux/actions/productActions";

export default function ProductDetails() {
  const { productid } = useParams();
  const product = useSelector((state) => state.product);
  const { id, title, price, description, category, image } = product;
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .catch((error) => console.log(error));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return Object.keys(product).length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div>
      <p>id - {id}</p>
      <p>title - {title}</p>
      <p>price - {price}</p>
      <p>description - {description}</p>
      <p>category - {category}</p>
      <p>image - {image}</p>
    </div>
  );
}
