import React from "react";
import styled from "styled-components";

const StyledHeader = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;

const TextWrapper = styled.div`
  background: white;
  color: black;
  height: auto;
  width: auto;
`;

export default function Header() {
  return (
    <div>
      <StyledHeader>
        Fake <TextWrapper>Store</TextWrapper>
      </StyledHeader>
    </div>
  );
}
