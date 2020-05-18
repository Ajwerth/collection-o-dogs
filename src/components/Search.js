import React from 'react';
import styled from "styled-components";

const SearchContainer = styled.div`
    form{
        display: flex;
        align-items: center; 

        .field{
            font-size: 1rem;
            input{
                padding: 6px;
            }
        }
        
        #submit{
            background: #693db1;
            color: #fff;
            padding: 5px 10px;
            font-size: 1rem;
            border: 1px;
            margin-left: 5px;
        }
    }
`

function Search() {
  return (
    <SearchContainer>
        <form action="" method="get" class="form-example">
            <div class="field">
                <label for="name">Search Breeds: </label>
                <input type="text" name="name" id="name" required />
            </div>
              <div class="button">
                <input type="submit" value="Search" id="submit"/>
            </div>
        </form>
    </SearchContainer>
  );
}

export default Search;