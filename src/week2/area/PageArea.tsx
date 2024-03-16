import React from "react";
import styled from "styled-components";
import {flexAlign, mainTheme} from "../common/CommonStyle";
import {gridArea} from "../common/CommonProps";
import PageButton from "../component/PageButton";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";
import {useAppDispatch, useAppSelector} from "../reducers/store";
import {selectPaging, updateCurrentPage} from "../reducers/pagingReducer";

const SPageArea = styled.div<gridArea>`
    grid-area: ${(props) => props.$gridArea};
    ${mainTheme};
    ${flexAlign};
    border-radius: 8px;
    flex-direction: row;
    margin-bottom: 5px;
    gap: 12px;
`;

const SArrowButton = styled.button<{ $isVisible: boolean, $direction: string }>`
    background-color: #2a2d3c;
    ${flexAlign};
    outline: none;
    border: none;
    width: 24px;
    height: 24px;
    visibility: ${(props) => props.$isVisible ? "visible" : "hidden"};

    ${(props) => props.$direction === "left"
            ? "&:active {padding-left: 2px; padding-top: 2px;}"
            : "&:active {padding-right: 2px; padding-top: 2px;}"}
`

type pagingInfo = { currentPage: number, totalCount: number, ROWS: number };
const usePageArr = ({currentPage, totalCount, ROWS}: pagingInfo) => {
    const maxPage = Math.max(1, Math.ceil(totalCount / ROWS)); // 전체 페이지 수 계산
    const maxPagingNumbers = 5; // 최대 페이징 번호 개수
    let startPage = Math.max(1, currentPage - Math.floor(maxPagingNumbers / 2));
    const endPage = Math.min(maxPage, startPage + maxPagingNumbers - 1);

    // 시작 페이지가 1이 아닐 때, 끝 페이지 번호를 조정하여 항상 페이징 번호가 5개가 되도록 함
    if (endPage - startPage + 1 < maxPagingNumbers) {
        startPage = Math.max(1, endPage - maxPagingNumbers + 1);
    }

    // 계산된 시작 및 끝 페이지 번호를 사용하여 페이징 번호 배열 생성
    const pagingNumbers = [];
    for (let page = startPage; page <= endPage; page++) {
        pagingNumbers.push(page);
    }

    return pagingNumbers;
}

const useVisibleLeft = (pageArr: number[]) => {
    return pageArr[0] > 1;
}

const useVisibleRight = (pageArr: number[], pagingInfo: pagingInfo) => {
    return pageArr[pageArr.length - 1] * pagingInfo.ROWS < pagingInfo.totalCount;
}

const PageArea = ({$gridArea}: gridArea) => {
    const paging = useAppSelector(selectPaging);
    const pageArr = usePageArr(paging);
    const dispatch = useAppDispatch();
    const visibleLeft = useVisibleLeft(pageArr);
    const visibleRight = useVisibleRight(pageArr, paging);

    const handlePageButtonClick = (pageNum: number) => {
        dispatch(updateCurrentPage(pageNum))
    }

    const handleArrowClick = (isLeft: boolean) => {
        isLeft ? dispatch(updateCurrentPage(pageArr[0] - 1)) : dispatch(updateCurrentPage(pageArr[4] + 1));
    }

    return (<SPageArea $gridArea={$gridArea}>
        <SArrowButton $isVisible={visibleLeft} $direction={"left"}
                      onClick={() => handleArrowClick(true)}>
            <FaCaretLeft size={30} color={"#56657c"}/>
        </SArrowButton>
        {pageArr.map((num) => <PageButton key={num} $isCurrentPage={paging.currentPage === num} pageNum={num}
                                          handleClickEvent={() => handlePageButtonClick(num)}/>)}
        <SArrowButton $isVisible={visibleRight} $direction={"right"}
                      onClick={() => handleArrowClick(false)}>
            <FaCaretRight size={30} color={"#56657c"}/>
        </SArrowButton>
    </SPageArea>);
}

export default PageArea;