import { combineReducers } from 'redux';

const chatRoomListReducer = (chatList = [], action) => {
    switch (action.type) {
        case 'FETCH_CHAT_ROOM':
            return action.payload;
        default:
            return chatList;
    }
};

const selectedChatRoomReducer = (chatRoom = null, action) => {
    switch (action.type) {
        case 'SELECT_CHAT_ROOM':
            return action.payload;
        case 'SOCKET_CHAT_UPDATE':
            return {
                ...chatRoom,
                chatLog: [
                    ...chatRoom.chatLog,
                    action.payload
                ]
            }
        default:
            return chatRoom;
    }
};


const createChatRoomModalReducer = (createChatRoomModal = false, action) => {
    if (action.type === 'CREATE_MODAL_ON') {
        return true;
    }

    if (action.type === 'CREATE_MODAL_OFF') {
        return false;
    }

    return createChatRoomModal;
};

const totalUserModalReducer = (state = false, action) => {
    if (action.type === 'REVERSE_TOTAL_USER_MODAL') {
        return !state;
    }
    return state;
};

const myIdReducer = (name = '', action) => {
    if (action.type === 'SET_ID') {
        return action.payload;
    }

    return name;
};

const userListReducer = (userList = [], action) => {
    if (action.type == 'UPDATE_USER_INFO') {
        return action.payload;
    }
    return userList;
};

export default combineReducers({
    chatRoomList: chatRoomListReducer,
    selectedChatRoom: selectedChatRoomReducer,
    myId: myIdReducer,
    userList: userListReducer,
    createChatRoomModal: createChatRoomModalReducer,
    totalUserModal: totalUserModalReducer
});