import React from "react";
import styled from "styled-components";
import {gridArea} from "../common/CommonProps";
import {flexAlign, highLightTheme, mainFont, SFlexBox} from "../common/CommonStyle";
import ColorPalette from "../component/ColorPalette";

const SInputArea = styled.div<gridArea>`
    grid-area: ${(props) => props.$gridArea};
    ${highLightTheme};
    margin-bottom: 15px;
    position: relative;
`;

const STextarea = styled.input`
    ${mainFont};
    background-color: white;
    width: 300px;
    height: 60px;
    font-size: 25px;
    border: 1px solid #ffffff;
    border-radius: 30px;
    outline: none;
    padding-left: 30px;
    padding-right: 70px;
    position: relative;
    top: 23px;
    right: 20px;

    &::placeholder {
        color: #cccccc;
    }

    &:focus {
        border: 2px solid rgba(114, 121, 131, 0.49);
    }
`;

const SAddButton = styled.button`
    background-color: #ff4d4d;
    ${mainFont};
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
    border: 0;
    border-radius: 35px;
    width: 120px;
    height: 50px;
    position: absolute;
    top: 30px;
    left: 360px;
    transition-duration: 0.3s;
    
    &:active {
        margin-left: 3px;
        margin-top: 3px;
    }
`;

const SWrap = styled.div`
    ${flexAlign};
    background-color: #feecdb;
    width: 235px;
    height: 40px;
    border: 0;
    border-radius: 30px;
    position: absolute;
    top: 98px;
    left: 205px;
`;


const InputArea = ({$gridArea} : gridArea) => {
    return (
        <SInputArea $gridArea={$gridArea}>
            <STextarea maxLength={13} placeholder={"TODO 입력"} />
            <SAddButton>ADD</SAddButton>
            <SWrap>
                <ColorPalette $paddingLeft={"0px"} $boxShadowColor={"#3d3d3d"}/>
            </SWrap>
        </SInputArea>
    );
}

export default InputArea;