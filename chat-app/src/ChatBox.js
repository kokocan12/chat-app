import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    flex-grow:1;
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
    return(
        <Container>
            <Message>
                <Icon src={process.env.PUBLIC_URL+"default-img.jpg"} />
                <RightCol>
                    <NameArea>
                        <Name>Me</Name><Time>오후 8:55</Time>
                    </NameArea>
                    <Contents>
                        <Emoji src={process.env.PUBLIC_URL+"emoji/깜찍.svg"} />
                        안녕하세요
                    </Contents>
                </RightCol>
            </Message>
            <MessageType2>
                반가워요
                <Emoji src={process.env.PUBLIC_URL+"emoji/깜찍.svg"} />
            </MessageType2>
            <Message>
                <Icon src={process.env.PUBLIC_URL+"default-img.jpg"} />
                <RightCol>
                    <NameArea>
                        <Name>Me</Name><Time>오후 9:50</Time>
                    </NameArea>
                    <Contents>
                        <Emoji src={process.env.PUBLIC_URL+"emoji/깜찍.svg"} />
                        그래요 그래요~그래요 그래요~그래요 그래요~그래요 그래요~그래요 그래요~그래요 그래요~그래요 그래요~그래요 그래요~
                        <Emoji src={process.env.PUBLIC_URL+"emoji/깜찍.svg"} />sdsadsadsadsaㅇㄴㅁㅇㄴㅁㅇㄴㅁ
                    </Contents>
                </RightCol>
            </Message>
        </Container>
    );
}

export default ChatBox;