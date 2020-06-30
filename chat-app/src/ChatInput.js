import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height:68px;
    padding:0 16px;
    margin: 16px;
    box-sizing:border-box;
    background-color:rgb(64,68,75);
    display:flex;
    flex-direction:row;
    border-radius:8px;
`;

const Message = styled.div`
    color:white;
    margin:0;
    height:100%;
    flex-grow:1;
    padding:8px 0;
    box-sizing:border-box;
    white-space:normal;
    overflow:hidden;
    &:focus{
        outline:none;
    }
`;

const EmojiButton = styled.img`
    width:22px;
    height:22px;
    margin:10px;
`;

function ChatInput(props){

    const [msg, setMsg]=useState('채팅창자리');
    const updateMsg=(str)=>{
        setMsg(msg+str);
    }

    return(
        <Container>
            <Message contentEditable={true} suppressContentEditableWarning={true}>채팅창자리</Message>
            <EmojiButton src={process.env.PUBLIC_URL+"EmojiButton.PNG"}/>
        </Container>
    );
}


export default ChatInput;