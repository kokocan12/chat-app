import jsonPlaceholder from "../apis/jsonPlaceholder";
import ws from '../apis/webSocket';

// Action creator
export const fetchChatRoomList = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/api/chat-room');
        dispatch({
                type: 'FETCH_CHAT_ROOM',
                payload: response.data
        });
        
    };
};

export const selectChatRoom = (chatRoomTitle, myId) => {

    const json = {
        type: 'CHANGE_CHAT_ROOM',
        payload1: myId,
        payload2: chatRoomTitle
    };
    const msg = JSON.stringify(json);
    ws.send(msg);
    
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/api/chat-log/${chatRoomTitle}`);
        dispatch({
            type: 'SELECT_CHAT_ROOM',
            payload: {
                title: chatRoomTitle,
                chatLog: response.data
            }
        });
    };
};

export const createNewChat = (chat) => {
    return {
        type: 'CREATE_NEW_CHAT',
        payload: chat
    };
};

export const openCreateChatRoom = () => {
    return {
        type: 'CREATE_MODAL_ON'
    };
};

export const closeCreateChatRoom = () => {
    return {
        type: 'CREATE_MODAL_OFF'
    };
};

export const createNewChatLog = (chatLog) => {
    return async (dispatch) => {
        await jsonPlaceholder.post('/api/chat-log', {
            chatRoomTitle: chatLog.chatRoomTitle,
            writer: chatLog.writer,
            years: chatLog.years,
            months: chatLog.months,
            days: chatLog.days,
            hours: chatLog.hours,
            minutes: chatLog.minutes,
            content: chatLog.content
        });
    };
};

export const updateUser = (payload1) => {
    return {
            type: 'UPDATE_USER_INFO',
            payload: payload1
    };
};

export const setId = (action) => {
    return {
        type: action.type,
        payload: action.payload1
    };
};

export const updateSocketChatLog = (data) => {
    const d = JSON.parse(data);
    return {
        type: 'SOCKET_CHAT_UPDATE',
        payload: d
    };
};

export const reverseTotalUserModal = () => {
    return {
        type: 'REVERSE_TOTAL_USER_MODAL'
    };
};