import React, {useState} from "react";
import styled from "styled-components";
import {inAndOutTheme, mainFont, mainTheme, SFlexBox} from "../common/CommonStyle";
import CheckBox from "./Checkbox";

interface SToDoProps {
    $isFocus: boolean,
}

interface SColorBarProps {
    $color: string,
}

interface STextProps {
    $isFinish: boolean,
}

interface ToDoProps extends SToDoProps, SColorBarProps, STextProps {
    giveText: string,
    endDate?: string
}

const SColorBar = styled.div<SColorBarProps>`
    height: 100%;
    width: 10px;
    background-color: ${(props) => props.$color};
`;

const SToDo = styled.div<SToDoProps>`
    ${inAndOutTheme};
    border: ${(props) => props.$isFocus ? "1px solid #7c7e93" : "1px solid #1b1f2b"};
    border-radius: 12px;
    height: ${(props) => props.$isFocus ? "100px" : "55px"};
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    padding: 15px;

    &:hover {
        border: 1px solid #7c7e93;
    }
`;

const SText = styled.div<STextProps>`
    ${inAndOutTheme};
    ${mainFont};
    color: ${(props) => props.$isFinish ? "#424652" : "#b6c2db"};
    text-decoration: ${(props) => props.$isFinish ? "line-through" : "none"};
    font-size: 20px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
`;

const SFlexBox2 = styled(SFlexBox)`
    justify-content: start;
`;

const SDiv = styled.div`
    ${inAndOutTheme};
    ${mainFont};
    width: 50%;
    text-align: left;
`;

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
            {/* 포커스면 컬러 팔레트 표시 */}
            {$isFocus && <div>colorPallte</div>}
            <SFlexBox direction={"row"}>
                <SColorBar $color={color}/>
                <SText $isFinish={$isFinish}>{text}</SText>
                <SFlexBox direction={"column"}>
                    <CheckBox/>
                    <button>X</button>
                </SFlexBox>
            </SFlexBox>
            {/* 포커스면 시작일 완료일 표시 */}
            {$isFocus &&  <SFlexBox2 direction={"row"}>
                <SDiv>입력일: {startDate}</SDiv>
                <SDiv>완료일: {endDate ? endDate : "-"}</SDiv>
            </SFlexBox2>}
        </SToDo>
    );
}

export default ToDo
