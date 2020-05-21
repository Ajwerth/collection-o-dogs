import React, { useState, useEffect } from "react";
import { useFetch } from "../customHooks";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 3px solid #222;
  border-radius: 4px;
  padding: 5px 15px;
  box-shadow: 3px 3px #222;
  margin-right: 20px;
  margin-top: 20px;
  background-color: #8459ca;
  color: #fff;
  width: 300px;
  height: 300px;
  overflow: hidden;
`;

function Card(props) {
  const { breed } = props;
  const [imageUrl, setImageUrl] = useState("");

  const res = useFetch(`https://dog.ceo/api/breed/${breed}/images/random`, {});

  useEffect(() => {
    if (res.response !== null) {
      setImageUrl(res.response.message);
    }
  }, [res]);

  return (
    <CardContainer>
      <h3>{breed}</h3>
      <img src={imageUrl} alt={"picture of a " + breed} />
    </CardContainer>
  );
}

export default Card;
