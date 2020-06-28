import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LeftBar from './LeftBar';
import UserArea from './UserArea';
import ChatArea from './ChatArea';
import Loading from './Loading';

const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;

`;


function App(props){
  const [servers, setServers] = useState([{name:"공부", active:"off"}, {name:"잡담", active:"on"}]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentServer, setCurrentServer] = useState({name:"잡담", active:"on"});
  useEffect(()=>{
    document.title="Chat-app";
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  });
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
        <LeftBar setServers={setServers} servers={servers}/>
        <UserArea/>
        <ChatArea title={currentServer.name} />
      </Container>
  );
  }
  
}

export default App;
