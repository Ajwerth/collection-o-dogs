import React from "react";
import logo from "../logo.png";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  .Dog-logo {
    width: 80px;
  }

  h1 {
    margin-left: 20px;
  }

  margin-bottom: 20px;
`;

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} className="Dog-logo" alt="logo" />
      <h1> Collection O' Dogs</h1>
    </HeaderContainer>
  );
}

export default Header;
