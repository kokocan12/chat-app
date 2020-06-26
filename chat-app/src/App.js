import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LeftBar from './LeftBar';
import UserArea from './UserArea';
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
  const [servers, setServers] = useState([{name:"서버111", active:"off"}, {name:"김서버11", active:"on"}]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    document.title="Chat-app";
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  });

  if(isLoading){
    return <Loading/>;
  } else {
    return (
      <Container>
        <LeftBar setServers={setServers} servers={servers}/>
        <UserArea/>
      </Container>
  );
  }
  
}

export default App;
