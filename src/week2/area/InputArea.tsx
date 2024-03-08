import React from "react";
import styled from "styled-components";
import {gridArea} from "../common/CommonProps";
import {highLightTheme, mainFont} from "../common/CommonStyle";

const SInputArea = styled.div<gridArea>`
    grid-area: ${(props) => props.$gridArea};
    ${highLightTheme};
    margin-bottom: 15px;
`;

const STextarea = styled.input`
    width: 300px;
    height: 60px;
    font-size: 25px;
`;

const InputArea = ({$gridArea} : gridArea) => {
    return (
        <SInputArea $gridArea={$gridArea}>
            <STextarea/>
        </SInputArea>
    );
}

export default InputArea;