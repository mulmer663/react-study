import React from "react";
import styled from "styled-components";
import {commonProps, commonStyles, gridProps} from "./common/Common";


const SMainText = styled.div<gridProps>`
    grid-area: ${(props) => props.gridProps};
    ${commonStyles};
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 150px;
    font-weight: 400;
`;
const MainText = ({gridProps, value}: commonProps) => {
    return (
        <SMainText gridProps={gridProps}>{value}</SMainText>
    );
}

export default MainText