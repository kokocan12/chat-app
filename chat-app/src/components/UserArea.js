import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { openInviteFriends } from '../actions';

import MemberContainer from './MemberContainer';
import Settings from './Settings';


const Container = styled.div`
    min-width:240px;
    height:100%;
    background-color:rgb(47,49,54);
    display:flex;
    flex-direction:column;
`;

const Header = styled.div`
    color:white;
    font-size:16px;
    padding:5px 16px;
    font-weight:bold;
    text-align:left;
    box-sizing:border-box;
    line-height:37px;
    width:100%;
    height:48px;
    user-select:none;
    border-bottom:solid 1px black;
`;

const InviteButton=styled.div`
    width:120px;
    height:30px;
    text-align:center;
    color:white;
    background-color:#7289DA;
    padding:10px;
    line-height:30px;
    border-radius:10px;
    cursor:pointer;
    font-weight:500;
    margin:10px auto;
    &:hover{
        transform:scale(1.02);
    }
`;

const MemberCounter = styled.div`
    margin-top:10px;
    height:20px;
    line-height:20px;
    padding:5px 20px;
    color:#829297;
    font-size:12px;
    font-weight:600;
    user-select:none;   
`;

const UserArea = ({ openInviteFriends, selectedChatRoom }) => {
    return(
        <Container>
            <Header>{selectedChatRoom.name}</Header>
            <InviteButton onClick={openInviteFriends}>친구초대하기</InviteButton>
            <MemberCounter>온라인-{selectedChatRoom.friends.length}</MemberCounter>
            <MemberContainer currentServer={selectedChatRoom} />
            <Settings />
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedChatRoom: state.selectedChatRoom
    };
};

export default connect(mapStateToProps, { openInviteFriends })(UserArea);