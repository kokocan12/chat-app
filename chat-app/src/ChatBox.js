import React, {useState,useEffect, createRef} from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    flex-grow:1;
    max-height:${props=>props.height};
    overflow:auto;
    &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: rgb(54,57,63);
    }
    &::-webkit-scrollbar{
        width: 12px;
        background-color: rgb(54,57,63);
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: rgb(32,34,37);
    }
`;

const Message=styled.div`
    width:100%;
    height:48px;
    display:flex;
    flex-direction:row;
    margin:20px 0 0 0;
`;

const Icon=styled.img`
    width:40px;
    height:40px;
    border-radius:20px;
    margin:5px 20px 0 20px;
`;

const RightCol=styled.div`
    
`;

const NameArea=styled.div`
    height:22px;
    display:flex;
    flex-direction:row;
    align-items:center;
`;

const Name=styled.span`
    height:21px;
    line-height:21px;
    font-size:16px;
    color:white;
    margin:0 10px 0 0;
`;

const Time=styled.span`
    color:rgb(114,118,125);
    font-size:12px;
`;

const Contents=styled.div`
    color:#DCDDDE;
    font-size:16px;
    line-height:22px;
    padding-right:80px;
`;

const Emoji=styled.img`
    width:22px;
    position:relative;
    top:5px;
    height:22px;
    margin:0 4px 0 0;
`;

const MessageType2=styled.div`
    padding:0 80px 0 80px;
    margin:3px 0 0 0;
    color:#DCDDDE;
    font-size:16px;
`;

function ChatBox(props){

    const Messages=props.currentServer.chatLog.map(el=>{
        let imgSrc='';
        switch(el.name){
            case "Me":
                imgSrc=process.env.PUBLIC_URL+"default-img.jpg";
                break;
            case "피카츄":
                imgSrc=process.env.PUBLIC_URL+"pikachu.png";
                break;
            case "파이리":
                imgSrc=process.env.PUBLIC_URL+"파이리.png";
                break;
            case "꼬부기":
                imgSrc=process.env.PUBLIC_URL+"꼬부기.jpg";
                break;
            case "이상해씨":
                imgSrc=process.env.PUBLIC_URL+"이상해씨.jpg";
                break;
        }
        const ojunohu = el.hours>=12?'오후':'오전';
        const hours_=el.hours>12? el.hours-12:el.hours;
        const minutes_=el.minutes<10? `0${el.minutes}`:`${el.minutes}`;
        return(
            <Message key={Math.random().toString()}>
                <Icon src={imgSrc} />
                <RightCol>
                    <NameArea>
                        <Name>{el.name}</Name><Time>{ojunohu} {hours_}:{minutes_}</Time>
                    </NameArea>
                    <Contents>
                        {el.content}
                    </Contents>
                </RightCol>
            </Message>
        );
    });

    const height=window.innerHeight-150+'px';
    const [containerRef, setContainerRef] = useState(()=>createRef());
    useEffect(()=>{
        containerRef.current.scrollTop=containerRef.current.scrollHeight;
    })
    return(
        <Container ref={containerRef} height={height} onClick={()=>props.setEmojiBox(false)}>
            {Messages}
        </Container>
    );
}

export default ChatBox;