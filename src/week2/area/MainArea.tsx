import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {gridArea} from "../common/CommonProps";
import {mainTheme} from "../common/CommonStyle";
import ToDo, {ToDoProps} from "../component/ToDo";

const SMainArea = styled.div<gridArea>`
    grid-area: ${(props) => (props.$gridArea)};
    ${mainTheme};
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
`;

interface mainAreaProps extends gridArea {
    addTodo: ToDoProps | undefined
}

const MainArea = ({$gridArea, addTodo}: mainAreaProps) => {
    const [todoList, setTodoList] = useState<ToDoProps[]>([]);

    useEffect(() => {
        if (addTodo) {
            const newToDoLost = [...todoList];
            newToDoLost.unshift(addTodo);
            setTodoList(newToDoLost);
        }
    }, [addTodo]);

    return (
        <SMainArea $gridArea={$gridArea}>
            {todoList.map((it, index) =>
                <ToDo key={index} giveText={it.giveText} $isFocus={it.$isFocus} $color={it.$color}
                      $isFinish={it.$isFinish}/>
            )}
        </SMainArea>
    );
}

export default MainArea;
