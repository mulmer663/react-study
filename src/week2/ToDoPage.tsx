import React from "react";
import styled from "styled-components";
import {inAndOutTheme} from "./common/CommonStyle";
import HeadBar from "./area/HeadBar";
import InputArea from "./area/InputArea";
import TabArea from "./area/TabArea";
import PageArea from "./area/PageArea";
import MainArea from "./area/MainArea";

const SToDoPage = styled.div`
    ${inAndOutTheme};
    height: auto;
    width: 100vw;
    padding: 50px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 100px);
    grid-template-rows: 80px 165px 50px 40px minmax(50px, auto);
    gap: 0;
    grid-template-areas: 
        "H H H H H"
        "I I I I I"
        "T T T T T"
        "P P P P P"
        "M M M M M"
`;

const ToDoPage = () => {
    return (
        <SToDoPage>
            <HeadBar $gridArea={"H"}/>
            <InputArea $gridArea={"I"}/>
            <TabArea $gridArea={"T"}/>
            <PageArea $gridArea={"P"}/>
            <MainArea $gridArea={"M"}/>
        </SToDoPage>
    );
}
export default ToDoPage;
