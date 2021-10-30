import React from "react";
import styled from "styled-components";

const StyledHeader = styled.p`
  color: black;
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export default function Header() {
  return (
    <div>
      <StyledHeader>Fake Store</StyledHeader>
    </div>
  );
}
