import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LeftBar from './LeftBar';
import UserArea from './UserArea';
import ChatArea from './ChatArea';
import Loading from './Loading';
import CreateServerModal from './CreateServerModal';

const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;

`;


function App(props){
  const [servers, setServers] = useState([{name:"공부", active:"off", key:"dwdwwd", friends:["Me", "피카츄"]},
   {name:"잡담", active:"on", key:"wwddda", friends:["Me"]}]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentServer, setCurrentServer] = useState();
  const [serverModal, setServerModal] = useState(false);
  useEffect(()=>{
    document.title="Chat-app";
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  });
  //현재 채팅방 설정..
  useEffect(()=>{
    servers.forEach(el=>{
      if(el.active==='on'){
        setCurrentServer(el);
      }
    })
  });

  if(isLoading){
    return <Loading/>;
  } else {
    return (
      <Container>
        <LeftBar setServerModal={setServerModal} setServers={setServers} servers={servers}/>
        <UserArea title={currentServer.name} currentServer={currentServer} setCurrentServer={setCurrentServer} />
        <ChatArea />
        {serverModal&&<CreateServerModal servers={servers} setServers={setServers} setServerModal={setServerModal} />}
      </Container>
  );
  }
  
}

export default App;
