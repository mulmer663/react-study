import React from "react";
import styled from "styled-components";
import {gridArea} from "../common/CommonProps";
import {mainTheme} from "../common/CommonStyle";
import ToDo from "../component/ToDo";
import {useAppSelector} from "../reducers/store";
import {selectTodoList} from "../reducers/todoReducer";

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

const MainArea = ({$gridArea}: gridArea) => {
    const todoList = useAppSelector(selectTodoList);

    return (
        <SMainArea $gridArea={$gridArea}>
            {todoList.map((it) =>
                <ToDo key={it.id} giveText={it.giveText} $isFocus={it.$isFocus} $color={it.$color}
                      $isFinish={it.$isFinish}  id={it.id}/>
            )}
        </SMainArea>
    );
}

export default MainArea;
