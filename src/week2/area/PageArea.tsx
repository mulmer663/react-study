import React, {useState} from "react";
import styled from "styled-components";
import {flexAlign, mainTheme} from "../common/CommonStyle";
import {gridArea} from "../common/CommonProps";
import PageButton from "../component/PageButton";
import {FaCaretLeft} from "react-icons/fa";
import {FaCaretRight} from "react-icons/fa";

const SPageArea = styled.div<gridArea>`
    grid-area: ${(props) => props.$gridArea};
    ${mainTheme};
    ${flexAlign};
    border-radius: 8px;
    flex-direction: row;
    margin-bottom: 5px;
    gap: 12px;
`;

const PageArea = ({$gridArea}: gridArea) => {
    const [leftClick, setLeftClick] = useState(false);
    const [rightClick, setRightClick] = useState(false);

    const leftIconStyles = {
        color: "#56657c",
        marginLeft: leftClick ? "2px" : "0",
        marginTop: leftClick ? "2px" : "0",
    }

    const rightIconStyles = {
        color: "#56657c",
        marginLeft: rightClick ? "2px" : "0",
        marginTop: rightClick ? "2px" : "0",
    }

    const handleLeftMouseDown = () => {
        setLeftClick(true);
    };

    const handleLeftMouseUp = () => {
        setLeftClick(false);
    };

    const handleRightMouseDown = () => {
        setRightClick(true);
    };

    const handleRightMouseUp = () => {
        setRightClick(false);
    };

    return (
        <SPageArea $gridArea={$gridArea}>
            <FaCaretLeft size={30} style={leftIconStyles} onMouseDown={handleLeftMouseDown} onMouseUp={handleLeftMouseUp}/>
            <PageButton $isCurrentPage={false} pageNum={1}></PageButton>
            <PageButton $isCurrentPage={false} pageNum={2}></PageButton>
            <PageButton $isCurrentPage={false} pageNum={3}></PageButton>
            <PageButton $isCurrentPage={false} pageNum={4}></PageButton>
            <PageButton $isCurrentPage={false} pageNum={5}></PageButton>
            <FaCaretRight size={30} style={rightIconStyles} onMouseDown={handleRightMouseDown} onMouseUp={handleRightMouseUp}/>
        </SPageArea>
    );
}

export default PageArea;