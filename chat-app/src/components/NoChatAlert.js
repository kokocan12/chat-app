import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    flex-grow:1;
    background-color:rgb(54,57,63);
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Message = styled.div`
    font-size:32px;
    color:rgb(114, 137, 218);
    font-weight:bold;
    user-select:none;
`;

function NoChatAlert(props){
    return (
        <Container>
            <Message>채팅방을 선택해주세요..!</Message>
        </Container>
    )
}


export default NoChatAlert;