import React, {useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { reverseTotalUserModal } from '../actions';

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
    overflow:auto;
    &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #eee;
    }
    &::-webkit-scrollbar{
        width: 12px;
        background-color: rgb(54,57,63);
    }
    &::-webkit-scrollbar-thumb{
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #ddd;
    }
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


const TotalUserModal = (props) => {

    const boxRef = useRef();

    const onBoxClick = (evt) => {
        if (!boxRef.current.contains(evt.target)){
            props.reverseTotalUserModal();
        } 
    }

    useEffect(()=>{
        setTimeout(() => {
            document.body.addEventListener('click', onBoxClick);
        }, 100);
        
        return () => {
            document.body.removeEventListener('click', onBoxClick);
        };
    }, []);
    
    const userList = props.userList.map(el => {
        let loc = el.chat ===" "? "선택 중": el.chat;
        return(
            <FriendWrap key={el.name}>
                    <Image src={process.env.PUBLIC_URL+"/img/default-img.jpg"} />
                    <Name>{el.name}</Name>
                    <InviteButton inviting="done" onClick={evt=>evt.preventDefault()}>{loc}</InviteButton>
            </FriendWrap>
        );
    });
    return (
        <Container>
            <Box ref={boxRef}>
                <Header>모든 접속자</Header>
                {userList}
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, { reverseTotalUserModal })(TotalUserModal);