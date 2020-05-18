import React from 'react';
import styled from "styled-components";

const SearchContainer = styled.div`
    form{
        display: flex;
        align-items: center; 

        .field{
            font-size: 1rem;

            label{
                font-weight: 700;
            }

            input{
                padding: 7px;
                border: 2px solid;
                border-radius: 4px;
            }
        }
        
        #submit{
            background: #693db1;
            border: 2px solid #693db1;
            color: #fff;
            padding: 5px 10px;
            font-size: 1rem;
            border-radius: 4px;
            margin-left: 5px;

            &:hover{
                background: #fff;
                color: #693db1;
                border: 2px solid #693db1;
                cursor: pointer;
            }
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