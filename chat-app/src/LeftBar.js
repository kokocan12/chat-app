import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width:82px;
    background-color:rgb(32,34,37);
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const ServerAdd = styled.span`
    width:60px;
    height:60px;
    display:inline-block;
    border-radius:20px;
    background-color:rgb(54, 57, 63);
    color:rgb(67,181,129);
    font-size:40px;
    margin:10px 0 10px 0;
    vertical-align:middle;
    text-align:center;
`

function LeftBar(){

    
    return(
        <Container>
            <ServerAdd>+</ServerAdd>
        </Container>
    )
}

export default LeftBar;