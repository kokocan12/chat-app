import React, {useState, createRef} from 'react';
import styled from 'styled-components';


const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const Box=styled.form`
    width:540px;
    height:400px;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:5px;
`;

const Header=styled.div`
    color:#7289da;
    font-size:18px;
    font-weight:bold;
    padding-top:10px;
`;

const TitleWrap=styled.div`
    margin-top:50px;
    flex-grow:1;
`;

const Title=styled.span`
    color:#4f5660;
    font-size:11px;
`;

const TitleInput=styled.input`
    padding:10px 4px;
    outline:none;
    border:none;
    border-bottom:3px solid #e3e5e8;
`;

const SubmitButton=styled.button`
    color:white;
    background-color:#7289da;
    border-radius:3px;
    font-size:14px;
    font-weight:bold;
    border:none;
    width:200px;
    height:50px;
    margin:0 0 20px 0;
`;

function CreateServerModal(props){

    const [nameRef, setNameRef] = useState(()=>createRef());

    const requestNewChat=(evt)=>{
        evt.preventDefault();
        props.setServerModal(false);
        props.servers.forEach(el=>{
            el.active="off";
        });
        props.setServers([...props.servers, {name:nameRef.current.value, active:"on", key:Math.random().toString()}]);
    }

    return (
        <Container onClick={()=>{props.setServerModal(false);}}>
            <Box onSubmit={requestNewChat} onClick={(evt)=>{evt.stopPropagation();}}>
                <Header>채팅방 만들기</Header>
                <TitleWrap>
                    <Title>채팅방 이름 : </Title>
                    <TitleInput ref={nameRef} type="text" placeholder="채팅방 이름을 입력하세요."/>
                </TitleWrap>
                <SubmitButton>만들기</SubmitButton>
            </Box>
        </Container>
    );
}

export default CreateServerModal;