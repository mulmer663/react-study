import React from "react";
import styled from "styled-components";
import {commonStyles, props} from "./Common";

interface clickButtonProps extends props {
    isSelect: boolean
    onClick(value: string): void
}

interface sClickButtonProps {
    isSelect: boolean;
    onClick?: () => void;
}

export const SClickButton = styled.button<sClickButtonProps>`
    ${commonStyles};
    background-color: ${(props) => (props.isSelect ? "#009900" : "#444444")};
    color: ${(props) => (props.isSelect ? "white" : "#00CC00")};

    &:hover {
        background-color: ${(props) => (props.isSelect ? "#007700" : "#66FF00")}
    }

    &:active {
        color: white;
        background-color: #009900; // 클릭 중일 때의 배경색
    }
`;

const BottomButton = ({value, isSelect, onClick}: clickButtonProps) => {
    return (
        <SClickButton type="button" onClick={() => onClick(value)} isSelect={isSelect}>
            {value}
        </SClickButton>
    );
}

export default BottomButton;