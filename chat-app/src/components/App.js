import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ChatRoomList from './ChatRoomList';
import UserArea from './UserArea';
import ChatArea from './ChatArea';
import Loading from './Loading';
import CreateServerModal from './CreateChatModal';
import InviteFriendsModal from './InviteFriendsModal';
import NoChatAlert from './NoChatAlert';

const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;

`;


function App({ createModal, inviteModal }){

  return (
    <Container>
      <ChatRoomList />
      <UserArea />
      <ChatArea />
      {createModal&&
      <CreateServerModal />}
      {inviteModal&&
      <InviteFriendsModal />}
    </Container>
  );
  
};

const mapStateToProps = ({ createModal, inviteModal }) => {
  return {
    createModal,
    inviteModal
  };
};

export default connect(mapStateToProps)(App);
