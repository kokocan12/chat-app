import React from 'react';

function FriendsMessage(currentServer, servers, setServers, msg){
    let name="";
    if(msg.includes("피카츄")&&currentServer.friends.includes("피카츄")){
        name="피카츄";
    } else if(msg.includes("파이리")&&currentServer.friends.includes("파이리")){
        name="파이리";
    } else if(msg.includes("꼬부기")&&currentServer.friends.includes("꼬부기")){
        name="꼬부기";
    } else if(msg.includes("이상해씨")&&currentServer.friends.includes("이상해씨")){
        name="이상해씨";
    }

    if(name!==""){
        const t=new Date();
        
        const newServers=servers.map(el=>{
            if(el.key===currentServer.key){
                const newEl={...el, chatLog:[...el.chatLog, {name:name, hours:t.getHours(), minutes:t.getMinutes(),
                content:"네? 저를 부르셨나요??"}]}
                return newEl;
            }
            return el;
        });
        setTimeout(()=>{setServers(newServers);},1000);
    }
}

export default FriendsMessage;