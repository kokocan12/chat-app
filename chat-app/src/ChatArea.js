import React from 'react';
import styled from 'styled-components';
import ChatBox from './ChatBox';

const Container = styled.div`
    flex-grow:1;
    height:100%;
    background-color:#36393f;
    display:flex;
    flex-direction:column;
`;

const Header = styled.div`
    width:100%;
    height:48px;
    padding:0 8px;
    display:flex;
    flex-direction:row;
    align-items:center;
    box-sizing:border-box;
    border-bottom:1px #000 solid;
`;

const HeaderIcon = styled.img`
    width:24px;
    height:24px;
    margin:0 10px;
`;

const HeaderTitle=styled.span`
    height:24px;
    flex-grow:1;
    font-size:16px;
    font-weight:bold;
    color:white;
`;

function ChatArea(props){
    return (
    <Container>
        <Header>
            <HeaderIcon src={process.env.PUBLIC_URL+"hashtag-icon.PNG"} />
            <HeaderTitle>채팅창</HeaderTitle>
        </Header>
        <ChatBox />
    </Container>
    );
}

export default ChatArea;