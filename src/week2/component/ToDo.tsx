import React, {useState} from "react";
import styled from "styled-components";
import {flexAlign, inAndOutTheme, mainFont, SFlexBox} from "../common/CommonStyle";
import CheckBox from "./Checkbox";
import {FaXmark} from "react-icons/fa6";
import ColorPalette from "./ColorPalette";
import {useAppDispatch} from "../reducers/store";
import {todoDeleted, todoDeleteReady, todoFocus, todoToggled} from "../reducers/todoReducer";
import {log} from "node:util";

interface SToDoProps {
    $isFocus: boolean,
}

interface SColorBarProps {
    $color: string,
}

interface STextProps {
    $isFinish: boolean,
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
    transition: height 0.2s;

    &:hover {
        border: 1px solid #7c7e93;
    }
`;

const SText = styled.div<STextProps>`
    ${inAndOutTheme};
    ${mainFont};
    border: 0;
    outline: none;
    color: ${(props) => props.$isFinish ? "#424652" : "#b6c2db"};
    text-decoration: ${(props) => props.$isFinish ? "line-through" : "none"};
    font-size: 20px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    transition: color 0.3s;

    &:focus {
        border: 0;
    }
`;

const SInput = styled.input<STextProps>`
    ${inAndOutTheme};
    ${mainFont};
    border: 0;
    outline: none;
    color: ${(props) => props.$isFinish ? "#424652" : "#b6c2db"};
    text-decoration: ${(props) => props.$isFinish ? "line-through" : "none"};
    font-size: 20px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    transition: color 0.3s;

    &:focus {
        border: 0;
    }
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

const SXMark = styled.div<{ $isDeleted: boolean }>`
    width: 22px;
    height: 22px;
    background-color: ${(props) => props.$isDeleted ? "#fdc9ca" : "#424652"};;
    border: 1px solid #424652;
    border-radius: 3px;
    transition: background-color 0.3s;
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
    id: string
    giveText: string,
    endDate?: string,
    isDeleted: boolean
}

const ToDo = ({$isFocus, $color, $isFinish, id, giveText, endDate, isDeleted}: ToDoProps) => {
    const [text, setText] = useState(giveText);
    const [color, setColor] = useState($color);
    const startDate = makeCurrentDate();
    const dispatch = useAppDispatch();

    const handleInputChange = (value: string) => {
        setText(value);
    };

    const checkBoxClickEvent = () => {
        let _endDate;
        if ($isFinish) {
            _endDate = ""
        } else {
            _endDate = makeCurrentDate();
        }
        dispatch(todoToggled({id, _endDate}));
    }

    const focusClickEvent = () => {
        dispatch(todoFocus(id));
    }

    const focusKeyEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(todoFocus(id));
        }
    }

    const deleteReadyEvent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!$isFocus) {
            dispatch(todoDeleteReady(id));
        } else {
            event.stopPropagation();
            dispatch(todoDeleteReady(id));
        }
    }
    const deleteClickEvent = () => {
        dispatch(todoDeleted(id));
    }

    return (
        <SToDo $isFocus={$isFocus}>
            {/* 포커스면 컬러 팔레트 표시 */}
            {$isFocus && <ColorPalette givenColor={color} callback={setColor}/>}
            <SFlexBox direction={"row"} onClick={focusClickEvent}>
                <SColorBar $color={color}/>
                {$isFocus ?
                    <SInput $isFinish={$isFinish} value={text} onClick={(event) => event.stopPropagation()}
                            onChange={(e) => handleInputChange(e.target.value)}
                            onKeyDown={(event) => focusKeyEvent(event)}
                    />
                    :
                    <SText $isFinish={$isFinish}>{text}</SText>
                }
                <SButtonGroup direction={"column"}>
                    <CheckBox eventCallBack={() => checkBoxClickEvent()}/>
                    {isDeleted ? <SXMark onClick={(event) => {
                            event.stopPropagation();
                            deleteClickEvent();
                        }}
                                         $isDeleted={isDeleted}><FaXmark size="25" color="#ff4d4d"/></SXMark> :
                        <SXMark onClick={(event) => deleteReadyEvent(event)}
                                $isDeleted={isDeleted}><FaXmark size="20" color="#1b1f2b"/></SXMark>}
                </SButtonGroup>
            </SFlexBox>
            {/* 포커스면 시작일 완료일 표시 */}
            {$isFocus && <SDateGroup direction={"row"}>
                <SDiv>입력일: {startDate}</SDiv>
                <SDiv>완료일: {endDate ? endDate : "-"}</SDiv>
            </SDateGroup>}
        </SToDo>
    );
}

export default ToDo
