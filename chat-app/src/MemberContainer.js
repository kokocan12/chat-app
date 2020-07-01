import React from 'react';
import styled from 'styled-components';


const Container=styled.div`
    padding:10px;
    display:flex;
    flex-grow:1;
    flex-direction:column;
`;

const Member=styled.div`
    height:32px;
    padding:3px 10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    user-select:none;
    &:hover{
        background-color:rgb(57,60,66);
        border-radius:5px;
        cursor:pointer;
    }
    &:hover span{
        color:white;
    }
`;

const Icon=styled.img`
    width:32px;
    height:32px;
    border-radius:16px;
    margin-right:8px;
`;

const Name=styled.span`
    height:20px;
    font-size:16px;
    color:#829297;
`;

function MemberContainer(props){

    const MemberList = 
    props.currentServer.friends.map((el, index)=>{
        let imgSrc='';
        if(el==='Me'){
            imgSrc=process.env.PUBLIC_URL+"default-img.jpg";
        } else if (el==='피카츄'){
            imgSrc=process.env.PUBLIC_URL+"pikachu.png";
        } else if (el==='꼬부기'){
            imgSrc=process.env.PUBLIC_URL+"꼬부기.jpg";
        } else if (el==='파이리'){
            imgSrc=process.env.PUBLIC_URL+"파이리.png";
        } else if (el==='이상해씨'){
            imgSrc=process.env.PUBLIC_URL+"이상해씨.jpg";
        }
        return <Member key={index}><Icon src={imgSrc} /><Name>{el}</Name></Member>;
    });

    return (
        <Container>
            {MemberList}        
        </Container>
    );
}

export default MemberContainer;