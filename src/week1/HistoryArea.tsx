import React, {useState} from "react";
import styled from "styled-components";
import {gridProps} from "./common/Common";
import {AiOutlineDelete} from "react-icons/ai";
import Button from "./common/Button";
import {SClickButton} from "./common/BottomButton";

interface historyProps extends gridProps {
    historyArr: string[];
    onClick() : void
}

const SHistoryArea = styled.div<gridProps>`
    grid-area: ${(props) => props.$gridProps};
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 12px;
`;

const HistoryArea = ({ $gridProps, historyArr, onClick }: historyProps) => {

    return (
        <SHistoryArea $gridProps={$gridProps}>
            <SClickButton $isSelect={false} onClick={onClick}>
                <AiOutlineDelete size="45" color="#00CC00" />
            </SClickButton>
            {historyArr.map((history, index) => (
                <Button key={index} value={history}></Button>
            ))}
        </SHistoryArea>
    );
}

export default HistoryArea;