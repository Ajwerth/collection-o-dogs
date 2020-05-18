import React from 'react';
import styled from "styled-components";
import golden from  "../golden_retriever.jpeg";

const CardContainer = styled.div`
    flex: 1;
    border: 3px solid #222;
    border-radius: 4px;
    padding: 5px 15px;
    box-shadow: 3px 3px #222;
    background-color: #e0e0e0;
    max-width: 200px;
    margin: 20px;
`

function Card() {
  return (
    <CardContainer>
      <h3>Golden Retriever</h3>
      <img src={golden} className="Dog-logo" alt="logo" />
    </CardContainer>
  );
}

export default Card;
