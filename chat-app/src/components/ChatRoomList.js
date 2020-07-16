import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchChatRoomList, selectChatRoom, updateUser } from '../actions';


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

    useEffect(() => {
        props.fetchChatRoomList();
    }, []);


    const serverList = props.chatRoomList.map(el => {
        let selected;
        if(props.selectedChatRoom){
            selected=props.selectedChatRoom.title===el.title;
        }
        return (
            <Server
                key={el.title}
                onClick={()=>{props.selectChatRoom(el.title, props.myId); updateUser([1,2,3]);}}
                selected={selected}
                data-tooltip={el.title}>
                {el.title[0]}
            </Server>
        );
    });

    return(
        <Container>
            <div>
                <ServerAdd onClick={props.openCreateChatRoom} data-tooltip={"채팅 추가하기"}>+</ServerAdd>
                {serverList}
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { fetchChatRoomList, selectChatRoom, updateUser })(ChatRoomList);