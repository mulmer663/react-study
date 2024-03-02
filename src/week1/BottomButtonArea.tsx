import React from "react";
import BottomButton from "./common/BottomButton";
import styled from "styled-components";
import {gridProps} from "./common/Common";

interface bottomButtonAreaProps extends gridProps {
    bottomButtons: number[];
    selectedVal: number;

    onClick(value: string): void
}

const SBottomButtonArea = styled.div<gridProps>`
    grid-area: ${(props) => props.gridProps};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 12px;
    justify-content: space-between;
`;
const BottomButtonArea = ({gridProps, bottomButtons, selectedVal, onClick}: bottomButtonAreaProps) => {
    return (
        <SBottomButtonArea gridProps={gridProps}>
            {bottomButtons.map((val) => (
                <BottomButton value={val.toString()} onClick={onClick} isSelect={val === selectedVal}/>
            ))}
        </SBottomButtonArea>
    );
}

export default BottomButtonArea;