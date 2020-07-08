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

function Loading(){
    return(
        <Container>
            <LoadingIcon src={process.env.PUBLIC_URL+"/img/loading-logo.png"} />
        </Container>
    )
}

export default Loading;