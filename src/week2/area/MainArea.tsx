import React from "react";
import styled from "styled-components";
import {filterCondition, gridArea, Paging} from "../common/CommonProps";
import {mainTheme} from "../common/CommonStyle";
import ToDo from "../component/ToDo";
import {useAppSelector} from "../reducers/store";
import {selectTodoList} from "../reducers/todoReducer";
import {selectPaging} from "../reducers/pagingReducer";

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

// 인덱스 처리되고 필터링 된 Todo 리스트 반환
const useTodoList = () => {
    const todoList = useAppSelector(selectTodoList);
    const paging = useAppSelector(selectPaging);
    const {startIndex, endIndex} = calculateIndices(paging);
    return todoList.filter(filterCondition[paging.filter])
        .slice(startIndex, endIndex);
}

const MainArea = ({$gridArea}: gridArea) => {
    const todoList = useTodoList();

    return (
        <SMainArea $gridArea={$gridArea}>
            {todoList.map((it) =>
                <ToDo key={it.id} id={it.id}/>
            )}
        </SMainArea>
    );
}

const calculateIndices = ({currentPage, totalCount, ROWS}: Paging) => {
    const startIndex = (currentPage - 1) * ROWS;
    const endIndex = Math.min(startIndex + ROWS, totalCount);

    return {startIndex, endIndex};
}

export default MainArea;
