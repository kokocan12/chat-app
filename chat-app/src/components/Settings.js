import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height:52px;
    box-sizing:border-box;
    background-color:rgb(41,43,47);
    padding:0 8px;
    display: flex;
    flex-direction:row;
    align-items:center;
`;

const Icon=styled.img`
    width:32px;
    height:32px;
    border-radius:16px;
    margin-right:8px;
`;

const Name=styled.span`
    color:white;
    font-size:14px;
    height:20px;
    line-height:20px;
    font-weight:bold;
    flex-grow:1;
    user-select:none;
`;

const SettingIcon=styled.img`
    width:23px;
    height:23px;
    margin:10px;
    cursor:pointer;
`;

function Settings(props){
    return(
        <Container>
            <Icon src={process.env.PUBLIC_URL+"/img/default-img.jpg"} />
            <Name>{props.myId}</Name>
            <SettingIcon src={process.env.PUBLIC_URL+"/img/settings-icon.jpg"} />
        </Container>
    );
}

export default Settings;