import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectChatRoom, openCreateChatRoom } from '../actions';


const Container = styled.div`
    min-width:82px;
    background-color:rgb(32,34,37);
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const ServerAdd = styled.span`
    width:60px;
    height:60px;
    display:block;
    border-radius:30px;
    background-color:rgb(54, 57, 63);
    color:rgb(67,181,129);
    font-size:40px;
    margin:10px 0 10px 0;
    transition:200ms;
    text-align:center;
    user-select:none;
    &:hover{
        cursor: pointer;
        background-color:rgb(67,181,129);
        color:white;
        border-radius:20px;
        position:relative;
    }
    &:hover::after{
        content:attr(data-tooltip);
        position:absolute;
        display:inline-block;
        white-space:nowrap;
        left:80px;
        padding:10px;
        top:6px;
        color:white;
        background-color:black;
        font-size:20px;
    }
`;


const Server = styled.div`
    width:60px;
    height:60px;
    display:block;
    border-radius:${props=>props.selected? '20px':'30px'};
    background-color:${props=>props.selected? '#7289DA':'#36393f'};
    color:#eee;
    font-size:30px;
    margin:10px 0 10px 0;
    line-height:60px;
    transition:200ms;
    text-align:center;
    user-select:none;
    &:hover{
        cursor: pointer;
        background-color:#7289DA;
        color:white;
        border-radius:20px;
        position:relative;
    }
    &:hover::after{
        content:attr(data-tooltip);
        position:absolute;
        display:inline-block;
        white-space:nowrap;
        left:80px;
        line-height:30px;
        padding:10px;
        top:6px;
        color:white;
        background-color:black;
        font-size:20px;
    }
`;

const ContextMenuWrapper=styled.div`
    position:relative;
    width:0;
    height:0;
`;

const ContextMenu=styled.div`
    position:absolute;
    width:70px;
    height:40px;
    left:60px;
    top:-30px;
    background-color:red;
    color:white;
    cursor:pointer;
    font-size:12px;
    font-weight:bold;
    line-height:40px;
    border-radius:10px;
    z-index:100;
`;


const ChatRoomList = (props) => {

    const serverContextMenu=(key)=>{
        const newServers=props.servers.map(el=>{
            if(el.key===key){
                const newEl={...el, contextMenu:true}
                return newEl;
            } else {
                const newEl={...el, contextMenu:false}
                return newEl;
            }
        });
        props.setServers(newServers);
    }
    return(
        <Container>
            <div>
                <ServerAdd onClick={props.openCreateChatRoom} data-tooltip={"채팅 추가하기"}>+</ServerAdd>
                {props.chatRoomList.map((el)=>{
                    return (
                        <Server
                            key={el.name}
                            onClick={()=>props.selectChatRoom(el)}
                            selected={props.selectedChatRoom.name===el.name}
                            data-tooltip={el.name}>
                            {el.name[0]}
                        </Server>
                    );
                })}
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        chatRoomList: state.chatRoomList,
        selectedChatRoom: state.selectedChatRoom
    };
};

export default connect(mapStateToProps, { selectChatRoom, openCreateChatRoom })(ChatRoomList);