import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { createNewChatLog, selectChatRoom } from '../actions';
import FriendsMessage from './FriendsMessage';

import ws from '../apis/webSocket';

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

const ChatInput = (props) => {

    const submitMessage = (evt) => {
        if (evt.key==='Enter') {
            const msg = evt.currentTarget.innerText;
            const t = new Date();
            evt.currentTarget.innerHTML = "";
            let msgObj = {
                chatRoomTitle: props.selectedChatRoom.title,
                writer: props.myId,
                years: (Number)(t.getFullYear()),
                months: (Number)(t.getMonth()+1),
                days: (Number)(t.getDate()),
                hours: (Number)(t.getHours()),
                minutes: (Number)(t.getMinutes()),
                content: msg   
            }
            props.createNewChatLog(msgObj);
            let obj1 = {
                type: 'SOCKET_CHAT_UPDATE',
                payload1: JSON.stringify(msgObj),
                payload2: props.selectedChatRoom.title
            };
            ws.send(JSON.stringify(obj1));
        }
    };

    return(
        <Container>
            <Message onKeyUp={submitMessage} contentEditable={true} onFocus={()=>props.setEmojiBox(false)} suppressContentEditableWarning={true}></Message>
            <EmojiButton onClick={(evt)=>props.setEmojiBox(!props.emojiBox)} src={process.env.PUBLIC_URL+"/img/emoji-button.jpg"}/>
            {props.emojiBox&&<EmojiWrap><EmojiBox></EmojiBox></EmojiWrap>}
        </Container>
    );
}; 


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { createNewChatLog, selectChatRoom })(ChatInput);