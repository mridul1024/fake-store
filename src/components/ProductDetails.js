import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { AiFillTag } from "react-icons/ai";
import { CgTag } from "react-icons/cg";

import styled from "styled-components";
import { keyframes } from "styled-components";

const DetailWrapper = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TitleWrapper = styled.p`
  font-size: 1.5rem;
  color: white;
  text-transform: uppercase;
  text-align: start;
  margin-left: 10px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PriceWrapper = styled.p`
  font-size: 1rem;
  color: white;
  text-align: start;
  margin-left: 10px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const DescriptionWrapper = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: start;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CategoryWrapper = styled.p`
  color: white;
  font-size: 0.8rem;
  text-align: start;
  margin-left: 10px;
  text-transform: uppercase;
`;

const ImageWrapper = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const ContainerDivOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const ContainerDivTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

export default function ProductDetails() {
  const { productid } = useParams();
  const product = useSelector((state) => state.product);
  const { title, price, description, category, image } = product;
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .catch((error) => console.log(error));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  return Object.keys(product).length === 0 ? (
    <LoadingImage src="../../loading.png" alt="loading-image"></LoadingImage>
  ) : (
    <div>
      <DetailWrapper>
        <ContainerDivOne>
          <TitleWrapper>{title}</TitleWrapper>
          <PriceWrapper>
            <AiFillTag />
            &nbsp; &#8377;
            {price}
          </PriceWrapper>
          <DescriptionWrapper>{description}</DescriptionWrapper>
          <CategoryWrapper>
            <CgTag />
            &nbsp;Category - {category}
          </CategoryWrapper>
        </ContainerDivOne>
        <ContainerDivTwo>
          <ImageWrapper src={image} alt="product-image"></ImageWrapper>
        </ContainerDivTwo>
      </DetailWrapper>
    </div>
  );
}
