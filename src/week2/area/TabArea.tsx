import React, {useEffect} from "react";
import styled from "styled-components";
import {FILTER, filterCondition, gridArea} from "../common/CommonProps";
import {flexAlign, inAndOutTheme, titleFont} from "../common/CommonStyle";
import {useAppDispatch, useAppSelector} from "../reducers/store";
import {filtering, selectPagingFilter, updateCurrentPage, updateTotalCount} from "../reducers/pagingReducer";
import {selectTodoList} from "../reducers/todoReducer";

const STabArea = styled.div<gridArea>`
    ${inAndOutTheme};
    grid-area: ${(props) => (props.$gridArea)};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 5px;
    margin-bottom: 5px;
`;

const STabButton = styled.button`
    ${titleFont};
    background-color: #2a2d3c;
    color: #ffffff;
    border: 1px solid #2a2d3c;
    ${flexAlign};
    font-size: 25px;
    flex-basis: 33%;

    &:hover {
        border: 1px solid #7c7e93;
        background-color: #7c7e93;
        color: #ffffff;
    }

    &:active {
        border: 1px solid #56657c;
        background-color: #56657c;
        color: #ffffff;
    }
`;

// 필터링된 Todo 항목의 길이 반환
const useCount = () => {
    const filter = useAppSelector(selectPagingFilter);
    const todoList = useAppSelector(selectTodoList);
    return todoList.filter(filterCondition[filter]).length;
}

const TabArea = ({$gridArea}: gridArea) => {
    const dispatch = useAppDispatch();
    const count = useCount();

    useEffect(() => {
        dispatch(updateTotalCount(count));
    }, [count, dispatch]);

    const handleTabClick = (filter: number) => {
        dispatch(filtering(filter));
        dispatch(updateCurrentPage(1));
    };

    const leftTab = {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    };

    const rightTab = {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    };

    return (
        <STabArea $gridArea={$gridArea}>
            <STabButton style={leftTab} onClick={() => handleTabClick(FILTER.ALL)}>전체</STabButton>
            <STabButton onClick={() => handleTabClick(FILTER.PROCEED)}>진행중</STabButton>
            <STabButton style={rightTab} onClick={() => handleTabClick(FILTER.FINISH)}>완료</STabButton>
        </STabArea>
    );
}

export default TabArea;