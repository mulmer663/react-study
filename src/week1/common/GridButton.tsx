import React from "react";
import styled from "styled-components";
import {commonProps, commonStyles, gridProps} from "./Common";

interface gridButtonProps extends commonProps {
    onClick(): void
}

const SLongButton = styled.button<gridProps>`
    grid-area: ${(props) => props.gridProps};
    ${commonStyles};
    font-size: 40px;
    &:hover {
        background-color: #66dd00; // 마우스 오버 시의 배경색
    }

    &:active {
        color: white;
        background-color: #009900; // 클릭 중일 때의 배경색
    }
`;
const GridButton = ({gridProps, value, onClick}: gridButtonProps) => {
    return (
        <SLongButton gridProps={gridProps} onClick={onClick}>{value}</SLongButton>
    );
}

export default GridButton
