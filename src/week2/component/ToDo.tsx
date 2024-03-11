import React, {useState} from "react";
import styled from "styled-components";
import {flexAlign, inAndOutTheme, mainFont, SFlexBox} from "../common/CommonStyle";
import CheckBox from "./Checkbox";
import {FaXmark} from "react-icons/fa6";
import ColorPalette from "./ColorPalette";

interface SToDoProps {
    $isFocus: boolean,
}

interface SColorBarProps {
    $color: string,
}

interface STextProps {
    $isFinish: boolean,
}

export interface ToDoProps extends SToDoProps, SColorBarProps, STextProps {
    id: string
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
    height: ${(props) => props.$isFocus ? "110px" : "55px"};
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

const SDateGroup = styled(SFlexBox)`
    justify-content: start;
`;

const SButtonGroup = styled(SFlexBox)`
    gap: 5px;
`;

const SDiv = styled.div`
    ${inAndOutTheme};
    ${mainFont};
    width: 50%;
    padding-left: 20px;
    text-align: left;
    font-size: 15px;
    color: #7e7e84;
`;

const SXMark = styled.div`
    width: 22px;
    height: 22px;
    background-color: #424652;
    border: 1px solid #424652;
    border-radius: 3px;
    ${flexAlign};
`;

const makeCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export interface ToDoProps extends SToDoProps, SColorBarProps, STextProps {
    giveText: string,
    endDate?: string
}

const ToDo = ({$isFocus, $color, $isFinish, giveText, endDate}: ToDoProps) => {
    const [color, setColor] = useState($color);
    const startDate = makeCurrentDate();

    return (
        <SToDo $isFocus={$isFocus}>
            {/* 포커스면 컬러 팔레트 표시 */}
            {$isFocus && <ColorPalette givenColor={color} callback={setColor}/>}
            <SFlexBox direction={"row"}>
                <SColorBar $color={$color}/>
                <SText $isFinish={$isFinish}>{giveText}</SText>
                <SButtonGroup direction={"column"}>
                    <CheckBox/>
                    <SXMark><FaXmark size="20" color="#1b1f2b"/></SXMark>
                </SButtonGroup>
            </SFlexBox>
            {/* 포커스면 시작일 완료일 표시 */}
            {$isFocus &&  <SDateGroup direction={"row"}>
                <SDiv>입력일: {startDate}</SDiv>
                <SDiv>완료일: {endDate ? endDate : "-"}</SDiv>
            </SDateGroup>}
        </SToDo>
    );
}

export default ToDo
