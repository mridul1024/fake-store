import React from "react";
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
  width: 400px;
  height: 200px;
  object-fit: cover;
  padding-left: 50px;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProductCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  height: 200px;
  padding: 20px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  text-overflow: ellipsis;
  text-align: start;
  font-size: 1.5rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background: white;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-out;
  }
`;

const PriceWrapper = styled.p`
  position: absolute;
  color: white;
  background: orangered;
  font-size: 1rem;
  padding: 2px 10px;
  border-radius: 12px;
  bottom: 10px;
  left: 20px;
`;

const CategoryWrapper = styled.p`
  position: absolute;
  border: 3px solid orangered;
  background: orangered;
  color: white;
  font-size: 1rem;
  border-radius: 6px;
  top: 10px;
  left: 20px;
  padding: 2px 10px;
  text-transform: uppercase;
`;

export default function Product({ id, product, price, category, imageUrl }) {
  return (
    <ProductDiv>
      <Link to={`/product/${id}`}>
        <ProductCard>
          <CategoryWrapper>{category}</CategoryWrapper>
          {product} <StyledImage src={imageUrl} alt="" />
          <PriceWrapper>&#8377;&nbsp;{price}</PriceWrapper>
        </ProductCard>
      </Link>
    </ProductDiv>
  );
}
