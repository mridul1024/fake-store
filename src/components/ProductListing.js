import React from "react";
import Product from "./Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
import styled from "styled-components";
import { keyframes } from "styled-components";

const RotateAnimation = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

const LoadingImage = styled.img`
  width: 50px;
  height: 50px;
  animation: ${RotateAnimation} 2s ease-out infinite;
`;

export default function ProductListing() {
  const product = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  let loading = false;
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
      {Object.keys(product).length === 0 ? (
        <LoadingImage src="./loading.png" alt="loading-image"></LoadingImage>
      ) : (
        product.map((item) => (
          <Product
            id={item.id}
            product={item.title}
            price={item.price}
            category={item.category}
            imageUrl={item.image}
          />
        ))
      )}
    </div>
  );
}
