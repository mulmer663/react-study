import React, {useState} from "react";
import styled from "styled-components";
import {inAndOutTheme, mainFont, mainTheme} from "../common/CommonStyle";

interface SToDoProps {
    $isFocus: boolean,
}

const SToDo = styled.div<SToDoProps>`
    ${inAndOutTheme};
    border: ${(props) => props.$isFocus ? "1px solid #7c7e93" : "1px solid #1b1f2b"};
    border-radius: 12px;
    height: ${(props) => props.$isFocus ? "120px" : "70px"};
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    &:hover {
        border: 1px solid #7c7e93;
    }
`;

interface SColorBarProps {
    $color: string,
}

const SColorBar = styled.div<SColorBarProps>`
    height: 45px;
    width: 8px;
    background-color: ${(props) => props.$color};
`;

interface STextProps {
    $isFinish: boolean,
}

const SText = styled.div<STextProps>`
    ${inAndOutTheme};
    ${mainFont};
    color: ${(props) => props.$isFinish ? "#424652" : "#b6c2db"};
    text-decoration: ${(props) => props.$isFinish ? "line-through" : "none"};
`;

interface ToDoProps extends SToDoProps, SColorBarProps, STextProps {
    giveText: string,
    endDate?: string
}

const makeCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const ToDo = ({giveText, $isFocus, $color, $isFinish, endDate}: ToDoProps) => {
    const [text, setText] = useState(giveText);
    const [color, setColor] = useState($color);
    const startDate = makeCurrentDate();

    return (
        <SToDo $isFocus={$isFocus}>
            {$isFocus && <div>colorPallte</div>}
            <div>
                <SColorBar $color={color}/>
                <SText $isFinish={$isFinish}>{text}</SText>
                <div>
                    <input type="checkbox"></input>
                    <button>X</button>
                </div>
            </div>
            {$isFocus && <div>
                <span>입력일: {startDate}</span>
                <span>완료일: {endDate ? endDate : "-"}</span>
            </div>}
        </SToDo>
    );
}

export default ToDo
