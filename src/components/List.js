import React from 'react';
import styled from "styled-components";

const ListContainer = styled.div`

`

function List(props) {

    const res = useFetch("http://localhost:5000/api/cars", {});
    if (!res.response) {
        return <div>Loading...</div>
    }

    const breeds = res.response.breeds
    
  return (
    <ListContainer>
        <h2>List of Breeds</h2>
        {props.children}
    </ListContainer>
  );
}

export default List;