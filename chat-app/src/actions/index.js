// Action creator

export const selectChatRoom = (chatRoom) => {
    return {
        type: 'CHAT_ROOM_SELECTED',
        payload: chatRoom
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

export const openInviteFriends = () => {
    return {
        type: 'INVITE_MODAL_ON'
    };
};

export const closeInviteFriends = () => {
    return {
        type: 'INVITE_MODAL_OFF'
    };
};

export const inviteNewFriend = (name, title) => {
    return {
        type: 'INVITE_NEW_FRIEND',
        payload: {
            name,
            title
        } 
    }
}

export const createNewChatLog = (chatLog) => {
    return {
        type: 'CREATE_NEW_CHAT_LOG',
        payload: chatLog
    }
}