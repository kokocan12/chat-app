import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setId, updateUser, selectChatRoom, updateSocketChatLog } from '../actions';

import ChatRoomList from './ChatRoomList';
import UserArea from './UserArea';
import ChatArea from './ChatArea';
import Loading from './Loading';
import CreateServerModal from './CreateChatModal';
import NoChatAlert from './NoChatAlert';

import ws from '../apis/webSocket';
import TotalUserModal from './TotalUserModal';

const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;

`;


function App({ createModal, selectedChatRoom, selectChatRoom, setId, updateSocketChatLog, updateUser, totalUserModal }){
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ws.onopen = (msg) => {
      setLoading(false);
      console.log(msg);
    }
    ws.onmessage = (msg) => {
      let json = JSON.parse(msg.data);

      switch (json.type) {
        case 'SET_ID':
          setId(json);
          return;
        case 'UPDATE_USER_INFO':
          updateUser(json.payload1);
          return;
        case 'UPDATE_CHAT_LOG':
          if (json.payload1 === selectedChatRoom.title) {
            selectChatRoom(json.payload1);
          }
          return;
      }
      if(json.type==='SOCKET_CHAT_UPDATE'){
        if (json.payload2 === selectedChatRoom.title) {
          updateSocketChatLog(json.payload1);
        }
      }
    };
    ws.onclose = (msg) => {
      console.log("연결해제");
    };
  }, []);

  const contents = (() => {
    
    if (loading) {
      return (
        <Container>
          <Loading />
        </Container>
      );
    } else {
      return (
        <Container>
          <ChatRoomList />
          {selectedChatRoom&&
          <UserArea />}
          {selectedChatRoom&&
          <ChatArea />}
          {!selectedChatRoom&&
          <NoChatAlert />}
          {createModal&&
          <CreateServerModal />}
          {totalUserModal&&
          <TotalUserModal />}
        </Container>
      );
    }
  })();

  
  return contents;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { setId, selectChatRoom, updateSocketChatLog, updateUser })(App);
