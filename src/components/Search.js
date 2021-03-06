import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  form {
    display: flex;
    align-items: center;

    .field {
      font-size: 1rem;

      label {
        font-weight: 700;
      }

      input {
        padding: 7px;
        border: 2px solid;
        border-radius: 4px;
      }
    }
  }
`;

function Search(props) {
  const { handleChange } = props;
  return (
    <SearchContainer>
      <form action="" method="get">
        <div className="field">
          <label htmlFor="name">Fill in the field to filter Breeds: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </SearchContainer>
  );
}

export default Search;
