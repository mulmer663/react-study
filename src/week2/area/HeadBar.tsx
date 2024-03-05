import React from "react";
import styled from "styled-components";
import {flexAlign, mainTheme, titleFont} from "../common/CommonStyle";
import {gridArea} from "../common/CommonProps";

const SHeadBar = styled.div<gridArea>`
    ${mainTheme};
    ${titleFont};
    ${flexAlign};
    grid-area: ${(props) => props.$gridArea};
    font-style: italic;
    font-weight: bolder;
    letter-spacing: 8px;
    margin-bottom: 15px;
`;

const HeadBar = ({$gridArea}: gridArea) => {
    return (
        <SHeadBar $gridArea={$gridArea}>TODO LIST</SHeadBar>
    );
}

export default HeadBar;

