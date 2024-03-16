import React, {ChangeEvent, useTransition} from "react";
import styled from "styled-components";
import {flexAlign, inAndOutTheme, mainFont, SFlexBox} from "../common/CommonStyle";
import CheckBox from "./Checkbox";
import {FaXmark} from "react-icons/fa6";
import ColorPalette from "./ColorPalette";
import {useAppDispatch, useAppSelector} from "../reducers/store";
import {
    selectTodoList,
    todoDeleted,
    todoDeleteReady,
    todoFocus,
    todoToggled,
    todoUpdateColor,
    todoUpdateText
} from "../reducers/todoReducer";
import {plusTotalCount} from "../reducers/pagingReducer";

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

export interface ToDoProps extends SToDoProps, SColorBarProps, STextProps {
    id: string
    text: string,
    endDate?: string,
    isDeleted: boolean
}

const EMPTY_TODO: ToDoProps = {
    $color: "#f29b76", $isFinish: false, $isFocus: false, isDeleted: false, id: '', text: ''
}

const useTodo = (id: string) => {
    const todoList = useAppSelector(selectTodoList);
    const todo = todoList.find(todo => todo.id === id);
    if (todo) {
        return todo;
    }
    return EMPTY_TODO;
}

const ToDo = ({id}: { id: string }) => {
    const {text, endDate, isDeleted, $isFocus, $color, $isFinish} = useTodo(id);
    const dispatch = useAppDispatch();
    const [, startTransition] = useTransition();
    const onChange = (event: ChangeEvent<HTMLInputElement>) => startTransition(() => handleInputChange(event.target.value));

    const startDate = makeCurrentDate();

    const handleInputChange = (text: string) => {
        dispatch(todoUpdateText({id, text}))
    };

    const checkBoxClickEvent = () => {
        let newEndDate;
        if ($isFinish) {
            newEndDate = ""
        } else {
            newEndDate = makeCurrentDate();
        }
        dispatch(todoToggled({id, newEndDate}));
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
        dispatch(plusTotalCount(-1));
    }

    const colorClickEvent = (color: string) => {
        dispatch(todoUpdateColor({id, color}));
    }

    return (
        <SToDo $isFocus={$isFocus}>
            {/* 포커스면 컬러 팔레트 표시 */}
            {$isFocus && <ColorPalette $color={$color} eventCallBack={colorClickEvent}/>}
            <SFlexBox $direction={"row"} onClick={focusClickEvent}>
                <SColorBar $color={$color}/>
                {$isFocus ?
                    <SInput $isFinish={$isFinish} value={text} onClick={(event) => event.stopPropagation()}
                            onChange={onChange}
                            onKeyDown={(event) => focusKeyEvent(event)}
                    />
                    :
                    <SText $isFinish={$isFinish}>{text}</SText>
                }
                <SButtonGroup $direction={"column"}>
                    <CheckBox eventCallBack={() => checkBoxClickEvent()} $isFinish={$isFinish}/>
                    {isDeleted
                        ? <SXMark onClick={(event) => {
                            event.stopPropagation();
                            deleteClickEvent();
                        }} $isDeleted={isDeleted}><FaXmark size="25" color="#ff4d4d"/></SXMark>
                        : <SXMark onClick={(event) => deleteReadyEvent(event)}
                                  $isDeleted={isDeleted}><FaXmark size="20" color="#1b1f2b"/></SXMark>}
                </SButtonGroup>
            </SFlexBox>
            {/* 포커스면 시작일 완료일 표시 */}
            {$isFocus && <SDateGroup $direction={"row"}>
                <SDiv>입력일: {startDate}</SDiv>
                <SDiv>완료일: {endDate ? endDate : "-"}</SDiv>
            </SDateGroup>}
        </SToDo>
    );
}

const makeCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export default ToDo
