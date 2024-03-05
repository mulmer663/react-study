import React from "react";
import styled, {css} from "styled-components";
import {gridArea} from "../common/CommonProps";
import {flexAlign, highLightTheme, hoverTheme, inAndOutTheme, mainTheme, titleFont} from "../common/CommonStyle";

const STabArea = styled.div<gridArea>`
    ${inAndOutTheme};
    grid-area: ${(props) => (props.$gridArea)};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:space-between;
    gap: 5px;
    margin-bottom: 5px;
`;

const STabButton = styled.button`
    ${titleFont};
    background-color: #2a2d3c;
    color: #ffffff;
    border: 1px solid #2a2d3c;
    ${flexAlign};
    font-size: 25px;
    flex-basis: 33%;
    
    &:hover {
        border: 1px solid #7c7e93;
        background-color: #7c7e93 ;
        color: #ffffff;
    }

    &:active {
        border: 1px solid #56657c;
        background-color: #56657c;
        color: #ffffff;
    } 
`;

const TabArea = ({$gridArea}:gridArea) => {
    const leftTab = {
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10
    };

    const rightTab = {
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
    };

    return (
        <STabArea $gridArea={$gridArea}>
            <STabButton style={leftTab}>전체</STabButton>
            <STabButton>진행중</STabButton>
            <STabButton style={rightTab}>완료</STabButton>
        </STabArea>
    );
}

export default TabArea;