import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FriendsMessage from './FriendsMessage';

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
    cursor:pointer;
`;

const EmojiWrap = styled.div`
    position:relative;
    width:0;
    height:0;
`;

const EmojiBox = styled.div`
    position:absolute;
    width:200px;
    height:80px;
    left:-200px;
    top:-80px;
    background-color:rgb(47,49,54);
    border-radius:10px;
`;

function ChatInput(props){

    const submitMessage=(evt)=>{
        if(evt.key==='Enter'){
            const msg=evt.currentTarget.innerText;
            const t=new Date();
            evt.currentTarget.innerHTML="";
            const newServers=props.servers.map(el=>{
                if(el.key===props.currentServer.key){
                    const newEl={...el, chatLog:[...el.chatLog, {name:"Me", hours:t.getHours(), minutes:t.getMinutes(),
                    content:msg}]}
                    return newEl;
                }
                return el;
            });
            props.setServers(newServers);
            FriendsMessage(props.currentServer, newServers, props.setServers, msg);
        }
    }

    return(
        <Container>
            <Message onKeyUp={submitMessage} contentEditable={true} onFocus={()=>props.setEmojiBox(false)} suppressContentEditableWarning={true}>채팅창자리</Message>
            <EmojiButton onClick={(evt)=>props.setEmojiBox(!props.emojiBox)} src={process.env.PUBLIC_URL+"EmojiButton.PNG"}/>
            {props.emojiBox&&<EmojiWrap><EmojiBox></EmojiBox></EmojiWrap>}
        </Container>
    );
}




export default ChatInput;