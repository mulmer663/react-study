import React from "react";
import styled from "styled-components";
import {flexAlign, mainFont} from "../common/CommonStyle";


interface SPageButtonProps {
    $isCurrentPage: boolean
}

interface PageButtonProps extends SPageButtonProps {
    pageNum: number,

    handleClickEvent(): void,
}

const SPageButton = styled.button<SPageButtonProps>`
    ${mainFont};
    box-shadow: ${(props) => props.$isCurrentPage ? '0 0 0 2px #7c7e93' : '0'};
    background-color: ${(props) => props.$isCurrentPage ? '#7c7e93' : '#56657c'};
    font-weight: bolder;
    color: ${(props) => props.$isCurrentPage ? '#ffffff' : '#cccccc'};
    width: 24px;
    height: 24px;
    border: ${(props) => props.$isCurrentPage ? '1px solid #7c7e93' : '1px solid #56657c'};
    border-radius: 50%;
    ${flexAlign};

    &:hover {
        background-color: #7c7e93;
        color: #ffffff;
    }

    &:active {
        box-shadow: 0 0 0 2px #7c7e93;
        border: 1px solid #7c7e93;
        background-color: #7c7e93;
        color: #cccccc;
    }
`;

const PageButton = ({pageNum, $isCurrentPage, handleClickEvent}: PageButtonProps) => {
    return (
        <SPageButton $isCurrentPage={$isCurrentPage} onClick={handleClickEvent}>{pageNum}</SPageButton>
    );
}

export default PageButton;