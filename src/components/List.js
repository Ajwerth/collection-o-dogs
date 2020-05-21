import React from "react";
import styled from "styled-components";
import { useFetch, useForm } from "../customHooks";
import Search from "./Search";

const ListContainer = styled.div`
  background-color: #eaeaea;
  padding: 10px;
  margin-top: 10px;
  height: 200px;
  overflow-y: scroll;

  .breedButton {
    padding: 5px 10px;
    background-color: #8459ca;
    margin: 5px;
    border-radius: 4px;
    border: 2px solid #000;
    color: white;
    font-size: 15px;
    font-family: "poppins", sans-serif;
  }
`;

function List(props) {
  const { values, handleChange } = useForm();
  const { handleClick } = props;

  const res = useFetch("https://dog.ceo/api/breeds/list/all", {});

  if (!res.response) {
    return <div>Loading...</div>;
  }

  const breeds = Object.keys(res.response.message);

  const filteredBreeds = breeds.filter((breed) => breed.includes(values.name));

  const BreedsDisplay =
    values.name === "" || null
      ? breeds.map((breed, index) => {
          return (
            <input
              className="breedButton"
              key={index}
              type="button"
              onClick={handleClick}
              value={breed}
            />
          );
        })
      : filteredBreeds.map((breed, index) => {
          return (
            <input
              className="breedButton"
              key={index}
              type="button"
              onClick={handleClick}
              value={breed}
            />
          );
        });

  return (
    <>
      <Search handleChange={handleChange} />
      <ListContainer>{BreedsDisplay}</ListContainer>
    </>
  );
}

export default List;
