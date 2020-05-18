import React from 'react';
import styled from "styled-components";
import Card from "./Card";

const CollectionContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`

function Collection() {
  return (
    <CollectionContainer>
      <Card />
      <Card />
    </CollectionContainer>
  );
}

export default Collection;
