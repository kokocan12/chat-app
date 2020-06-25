import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width:240px;
    height:100%;
    background-color:rgb(47,49,54);
    display:flex;
`

const Header = styled.div`
    color:white;
    font-size:16px;
    padding:5px 16px;
    font-weight:bold;
    text-align:left;
    box-sizing:border-box;
    line-height:37px;
    width:100%;
    height:48px;
    border-bottom:solid 1px black;
`

function UserArea(props){
    return(
        <Container>
            <Header>Title</Header>
        </Container>
    )
}


export default UserArea;