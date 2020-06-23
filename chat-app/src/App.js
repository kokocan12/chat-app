import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LeftBar from './LeftBar';

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
  useEffect(()=>{
    document.title="Chat-app";
  })
  return (
      <Container>
        <LeftBar setServers={setServers} servers={servers}/>
      </Container>
  );
}

export default App;
