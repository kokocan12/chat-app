import React from 'react';
import styled, {keyframes} from 'styled-components';


const bounceAnimation = keyframes`
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-30px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
`

const Container = styled.div`
    width:100%;
    height:100%;
    background-color:rgb(47,49,54);
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    left:0;
    top:0;
`;

const LoadingIcon = styled.img`
    width:130px;
    height:80px;
    animation: ${bounceAnimation} 2s 1s infinite linear alternate;
`;

const LoadingMsg = styled.h1`
    color: white;
    font-size: 32px;
`;

function Loading(){
    return(
        <Container>
            <LoadingMsg>서버에 접속중입니다. 3초안에 접속이 안되면 새로고침해주세요..!</LoadingMsg>
        </Container>
    )
}

export default Loading;