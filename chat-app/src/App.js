import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LeftBar from './LeftBar';
import UserArea from './UserArea';
import ChatArea from './ChatArea';
import Loading from './Loading';
import CreateServerModal from './CreateServerModal';
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


function App(props){
  const [servers, setServers] = useState([{name:"공부", active:"off", key:"dwdwwd", friends:["Me", "피카츄", "이상해씨"], contextMenu:false,
chatLog:[{name:"Me", hours:12, minutes:17, content:"안녕하세요?"}, {name:"피카츄", hours:12, minutes:18, content:"초대해주셔서 감사합니다."}]},
   {name:"잡담", active:"on", key:"wwddda", friends:["Me"], contextMenu:false, chatLog:[{name:"Me", hours:6, minutes:12, content:"반갑습니다."}]}]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentServer, setCurrentServer] = useState();
  const [serverModal, setServerModal] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);

  useEffect(()=>{
    document.title="Chat-app";
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  });
  //현재 채팅방 설정..
  useEffect(()=>{
    //선택된 서버가 1개가 아닌 경우 (0또는 2~)
    let selectedServerCnt=0;
    servers.forEach(el=>{
      if(el.active==='on'){
        selectedServerCnt++;
      }
    });

    if(selectedServerCnt===1){
      servers.forEach(el=>{
        if(el.active==='on'){
          setCurrentServer(el);
        }
      });
    } else {

      if(servers.length>0){
        const newServers=servers.map((el, index)=>{
          if(index===0){
            el.active='on';
          } else {
            el.active='off';
          }
          return el;
        });
        setServers(newServers);
        }
      }
  });

  const offContextMenu=()=>{
    const newServers=servers.map(el=>{
      if(el.contextMenu===true){
          const newEl={...el, contextMenu:false};
          return newEl;
      } else {
          return el;
      }
    });
    setServers(newServers);
  }

  if(isLoading){
    return <Loading/>;
  } else {
    return (
      <Container>
        <LeftBar offContextMenu={offContextMenu} setServerModal={setServerModal} setServers={setServers} servers={servers}/>
        {servers.length>0&&
        <UserArea offContextMenu={offContextMenu} title={currentServer.name} setInviteModal={setInviteModal} currentServer={currentServer} />}
        {servers.length>0&&
        <ChatArea currentServer={currentServer} setServers={setServers} servers={servers} offContextMenu={offContextMenu}/>}
        {servers.length===0&&
        <NoChatAlert />}
        {serverModal&&
        <CreateServerModal servers={servers} setServers={setServers} setServerModal={setServerModal} />}
        {inviteModal&&
        <InviteFriendsModal servers={servers} setServers={setServers} currentServer={currentServer} setInviteModal={setInviteModal} />}
      </Container>
  );
  }
  
}

export default App;
