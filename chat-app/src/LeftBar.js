import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width:82px;
    background-color:rgb(32,34,37);
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const ServerAdd = styled.span`
    width:60px;
    height:60px;
    display:block;
    border-radius:30px;
    background-color:rgb(54, 57, 63);
    color:rgb(67,181,129);
    font-size:40px;
    margin:10px 0 10px 0;
    vertical-align:middle;
    transition:200ms;
    text-align:center;
    user-select:none;
    &:hover{
        cursor: pointer;
        background-color:rgb(67,181,129);
        color:white;
        border-radius:20px;
        position:relative;
    }
    &:hover::after{
        content:attr(data-tooltip);
        position:absolute;
        display:inline-block;
        white-space:nowrap;
        left:80px;
        padding:10px;
        top:6px;
        color:white;
        background-color:black;
        font-size:20px;
    }
`;


const Server = styled.div`
    width:60px;
    height:60px;
    display:block;
    border-radius:${props=>props.selected==='on'? '20px':'30px'};
    background-color:${props=>props.selected==='on'? '#7289DA':'#36393f'};
    color:#eee;
    font-size:30px;
    margin:10px 0 10px 0;
    line-height:60px;
    transition:200ms;
    text-align:center;
    user-select:none;
    &:hover{
        cursor: pointer;
        background-color:#7289DA;
        color:white;
        border-radius:20px;
        position:relative;
    }
    &:hover::after{
        content:attr(data-tooltip);
        position:absolute;
        display:inline-block;
        white-space:nowrap;
        left:80px;
        line-height:30px;
        padding:10px;
        top:6px;
        color:white;
        background-color:black;
        font-size:20px;
    }
`


function LeftBar(props){

    
    useEffect((servers)=>{
    });

    function changeActive(index){
        const tmp=props.servers;
        tmp.forEach(el=>{
            el.active="off";
        });
        tmp[index].active="on";
        props.setServers([...tmp]);
    }

    

    return(
        <Container>
            <div>
                <ServerAdd data-tooltip={"서버 추가하기"}>+</ServerAdd>
                {props.servers.map((el, index)=>{
                    return <Server onClick={()=>changeActive(index)} key={index} selected={el.active} data-tooltip={el.name}>{el.name[0]}</Server>
                })}
            </div>
        </Container>
    )
}

export default LeftBar;