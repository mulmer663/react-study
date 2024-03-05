import React from "react";
import styled from "styled-components";
import {mainTheme} from "../common/CommonStyle";
import {gridArea} from "../common/CommonProps";
import PageButton from "../component/PageButton";

const SPageArea = styled.div<gridArea>`
    grid-area: ${(props) => props.$gridArea};
    ${mainTheme};
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    gap: 12px;
`;

const PageArea = ({ $gridArea}: gridArea) => {
    return (
        <SPageArea $gridArea={$gridArea}>
            <PageButton $isCurrentPage={false} pageNum={1}></PageButton>
            <PageButton $isCurrentPage={false} pageNum={2}></PageButton>
            <PageButton $isCurrentPage={false} pageNum={3}></PageButton>
        </SPageArea>
    );
}

export default PageArea;