import React from 'react';
import styled from 'styled-components';


const Container=styled.div`
    padding:10px;
    display:flex;
    flex-direction:column;
`;

const Member=styled.div`
    height:32px;
    padding:3px 10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    user-select:none;
`;

const Icon=styled.img`
    width:32px;
    height:32px;
    border-radius:16px;
    margin-right:8px;
`;

const Name=styled.span`
    height:20px;
    font-size:16px;
    color:#829297;
`;

function MemberContainer(props){
    return (
        <Container>
        <Member><Icon src={process.env.PUBLIC_URL+"default-img.jpg"} /><Name>Me</Name></Member>
        <Member><Icon src={process.env.PUBLIC_URL+"pikachu.png"} /><Name>피카츄</Name></Member>
        </Container>
    );
}

export default MemberContainer;