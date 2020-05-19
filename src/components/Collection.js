import React from "react";
import styled from "styled-components";

const CollectionContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  h2 {
    border-bottom: 2px solid #000;
  }
`;

function Collection(props) {
  return (
    <>
      <h2>Your Collection</h2>
      <CollectionContainer>{props.children}</CollectionContainer>
    </>
  );
}

export default Collection;
