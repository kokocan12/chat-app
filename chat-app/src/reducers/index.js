import { combineReducers } from 'redux';

const initialChatRoomList = [
    {
        name: '공부',
        friends: ['Me', '피카츄', '이상해씨'],
        contextMenu: false,
        chatLog: [
            { name: 'Me', hours: 12, minutes: 17, content: '안녕하세요?' },
            { name : '피카츄', hours: 12, minutes: 18, content: '초대해주셔서 감사합니다.' }
        ]
    },
   {
       name: '잡담',
       friends: ['Me'],
       contextMenu: false,
       chatLog: [
           { name: 'Me', hours: 6, minutes: 12, content: '반갑습니다.' }
        ]
    }
];

const chatRoomListReducer = (chatList = initialChatRoomList, action) => {
    
    if (action.type === 'CREATE_NEW_CHAT') {
        return [
            ...chatList,
            action.payload
        ];
    }

    if (action.type === 'CREATE_NEW_CHAT_LOG') {
        return chatList.map(el => {
            if (el.name === action.payload.selectedChatRoomTitle) {
                return {
                    ...el,
                    chatLog: [...el.chatLog, action.payload.chat]
                };
            }
            return el;
        });
    }

    if (action.type === 'INVITE_NEW_FRIEND') {
        return chatList.map(el=>{
            if (el.name === action.payload.title) {
                return {
                    ...el,
                    friends: [...el.friends, action.payload.name]
                };
            }
            return el;
        });
    }

    return chatList;
};

const selectedChatRoomReducer = (selectedChatRoom = initialChatRoomList[0], action) => {
    if (action.type === 'CHAT_ROOM_SELECTED') {
        return action.payload;
    }

    if (action.type === 'INVITE_NEW_FRIEND' && action.payload.title === selectedChatRoom.name) {
        return {
            ...selectedChatRoom,
            friends: [...selectedChatRoom.friends, action.payload.name]
        };
    }
    if (action.type === 'CREATE_NEW_CHAT_LOG') {
        return {
            ...selectedChatRoom,
            chatLog: [
                ...selectedChatRoom.chatLog,
                action.payload.chat
            ]
        };
    }

    return selectedChatRoom;
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

const inviteFriendsModalReducer = (inviteFriendsModal = false, action) => {
    if (action.type === 'INVITE_MODAL_ON') {
        return true;
    }

    if (action.type === 'INVITE_MODAL_OFF') {
        return false;
    }

    return inviteFriendsModal;
};

export default combineReducers({
    chatRoomList: chatRoomListReducer,
    selectedChatRoom: selectedChatRoomReducer,
    createModal: createChatRoomModalReducer,
    inviteModal: inviteFriendsModalReducer,
});