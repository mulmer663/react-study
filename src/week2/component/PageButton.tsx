import React from "react";
import styled from "styled-components";
import {flexAlign, highLightTheme, mainFont} from "../common/CommonStyle";
import {value} from "../common/CommonProps";


interface SPageButtonProps {
    $isCurrentPage: boolean
}
interface PageButtonProps extends SPageButtonProps{
    pageNum: number,
}

const SPageButton = styled.button<SPageButtonProps>`
    ${mainFont};
    ${highLightTheme};
    box-shadow: ${(props) => props.$isCurrentPage ? '0 0 0 4px black' : '0'};
    font-weight: bolder;
    color: #cccccc;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    ${flexAlign};

    &:hover {
        background-color: #7c7e93 ;
        color: #ffffff;
    }

    &:active {
        box-shadow: 0 0 0 4px black;
        background-color: #56657c ;
        color: #cccccc;
    }
`;

const PageButton = ({pageNum, $isCurrentPage} : PageButtonProps) => {
    return (
        <SPageButton $isCurrentPage={$isCurrentPage}>{pageNum}</SPageButton>
    );
}

export default PageButton;