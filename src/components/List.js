import React from "react";
import styled from "styled-components";
import { useFetch, useForm } from "../customHooks";
import Search from "./Search";

const ListContainer = styled.div`
  height: 200px;
  overflow-y: scroll;

  .row {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
`;

function List(props) {
  const { values, handleChange, handleSubmit } = useForm();
  const { handleClick } = props;

  const res = useFetch("https://dog.ceo/api/breeds/list/all", {});

  if (!res.response) {
    return <div>Loading...</div>;
  }

  const breeds = Object.keys(res.response.message);

  const filteredBreeds = breeds.filter((breed) => breed.includes(values.name));

  const BreedsDisplay = () =>
    filteredBreeds.map((breed) => {
      return (
        <div className="row">
          <p>{breed}</p>
          <input
            type="button"
            onClick={handleClick}
            value="Add to Collection"
          />
        </div>
      );
    });

  return (
    <>
      <Search handleChange={handleChange} handleSubmit={handleSubmit} />
      <ListContainer>
        <BreedsDisplay />
      </ListContainer>
    </>
  );
}

export default List;
