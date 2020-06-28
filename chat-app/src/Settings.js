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
    user-drag:none;
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
    user-drag:none;
    cursor:pointer;
`;

function Settings(props){
    return(
        <Container>
            <Icon src={process.env.PUBLIC_URL+"default-img.jpg"} />
            <Name>Me</Name>
            <SettingIcon src={process.env.PUBLIC_URL+"settings-icon.png"} />
        </Container>
    );
}

export default Settings;