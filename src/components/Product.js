import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductDiv = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  z-index: 2;
`;

const ProductCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  height: 200px;
  padding: 20px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 6px;
  text-overflow: ellipsis;
`;

export default function Product({ id, product, price, description, imageUrl }) {
  return (
    <Link to={`/product/${id}`}>
      <ProductDiv>
        <ProductCard>
          {product} <StyledImage src={imageUrl} alt="" />
        </ProductCard>
      </ProductDiv>
    </Link>
  );
}
