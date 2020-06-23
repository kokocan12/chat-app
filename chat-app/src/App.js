import React from 'react';
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



function App(){
  return (
      <Container>
        <LeftBar />
      </Container>
  );
}

export default App;
