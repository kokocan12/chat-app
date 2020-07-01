import React, {useEffect} from 'react';
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
    margin-bottom:20px;
`;

const FriendWrap=styled.div`
    width:250px;
    height:50px;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:5px 0 10px 0;
    user-select:none;
`;

const Image=styled.img`
    width:50px;
    height:50px;
    border-radius:25px;
    box-sizing:border-box;
    border:solid 1px black;
`;

const Name=styled.span`
    font-size:14px;
    color:black;
    flex-grow:1;
`;

const InviteButton=styled.button`
    background-color:${
        props=>
        props.inviting==='done'? '#c3c6c9':'#43b581'
    };
    cursor:${
        props=>
        props.inviting==='done'? 'normal':'pointer'
    };
    color:white;
    border:none;
    outline:none;
    width:100px;
    height:30px;

`;


function InviteFriendsModal(props){
 
    const inviteNewFriend=(evt)=>{
        evt.preventDefault();
        const newServers=props.servers.map(el=>{
            if(el.key===props.currentServer.key){
                const updatedEl={
                    ...props.currentServer,
                    friends:[...props.currentServer.friends, evt.currentTarget.parentNode.dataset.name],
                }
                return updatedEl;
            }
            return el;
        });

        props.setServers(newServers);
        InviteMessage(evt.currentTarget.parentNode.dataset.name, newServers);
    }

    const InviteMessage=(name, servers)=>{
        const t=new Date();
        
        const newServers=servers.map(el=>{
            if(el.key===props.currentServer.key){
                const newEl={...el, chatLog:[...el.chatLog, {name:name, hours:t.getHours(), minutes:t.getMinutes(),
                content:"초대해주셔서 감사합니다! 저와 대화하시려면 제 이름을 불러주세요~!"}]}
                return newEl;
            }
            return el;
        });
        setTimeout(()=>{props.setServers(newServers);},1000);
    }

    useEffect(()=>{
    })

    

    return (
        <Container onClick={()=>{props.setInviteModal(false);}}>
            <Box onClick={(evt)=>{evt.stopPropagation();}}>
                <Header>친구 초대하기</Header>
                <FriendWrap data-name="피카츄">
                    <Image src={process.env.PUBLIC_URL+"/img/pikachu.png"} />
                    <Name>피카츄</Name>
                    {props.currentServer.friends.includes("피카츄")?
                        <InviteButton inviting="done" onClick={evt=>evt.preventDefault()}>초대됨</InviteButton>:
                        <InviteButton inviting="yet" onClick={inviteNewFriend}>초대하기</InviteButton>
                    }
                </FriendWrap>
                <FriendWrap data-name="파이리">
                    <Image src={process.env.PUBLIC_URL+"/img/파이리.png"} />
                    <Name>파이리</Name>
                    {props.currentServer.friends.includes("파이리")?
                        <InviteButton inviting="done" onClick={evt=>evt.preventDefault()}>초대됨</InviteButton>:
                        <InviteButton inviting="yet" onClick={inviteNewFriend}>초대하기</InviteButton>
                    }
                </FriendWrap>
                <FriendWrap data-name="꼬부기">
                    <Image src={process.env.PUBLIC_URL+"/img/꼬부기.jpg"} />
                    <Name>꼬부기</Name>
                    {props.currentServer.friends.includes("꼬부기")?
                        <InviteButton inviting="done" onClick={evt=>evt.preventDefault()}>초대됨</InviteButton>:
                        <InviteButton inviting="yet" onClick={inviteNewFriend}>초대하기</InviteButton>
                    }
                </FriendWrap>
                <FriendWrap data-name="이상해씨">
                    <Image src={process.env.PUBLIC_URL+"/img/이상해씨.jpg"} />
                    <Name>이상해씨</Name>
                    {props.currentServer.friends.includes("이상해씨")?
                        <InviteButton inviting="done" onClick={evt=>evt.preventDefault()}>초대됨</InviteButton>:
                        <InviteButton inviting="yet" onClick={inviteNewFriend}>초대하기</InviteButton>
                    }
                </FriendWrap>
            </Box>
        </Container>
    );
}

export default InviteFriendsModal;