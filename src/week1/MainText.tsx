import React from "react";
import styled from "styled-components";
import {commonProps, commonStyles, gridProps} from "./common/Common";
import {BsExclamationCircleFill} from "react-icons/bs";

interface mainTextProps extends commonProps {
    isValid: boolean
}

interface sValidDivProps {
    isValid: boolean;
}

const SMainText = styled.div<gridProps>`
    grid-area: ${(props) => props.gridProps};
    ${commonStyles};
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 150px;
    font-weight: 400;
    flex: 1;
`;

const SValidDiv = styled.div<sValidDivProps>`
    ${commonStyles};
    border-radius: 10px;
    margin-top: -80px;
    margin-bottom: 38px;
    width: 90%;
    height: 50px;
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    visibility: ${(props) => props.isValid ? "hidden" : "visible"};
`;

const MainText = ({gridProps, value, isValid}: mainTextProps) => {
    return (
        <SMainText gridProps={gridProps}>
            <SValidDiv isValid={isValid}>
                <BsExclamationCircleFill size="24"/>&nbsp;&nbsp;숫자의 범위는 0~99까지 입니다.
            </SValidDiv>
            {value}
        </SMainText>
    );
}

export default MainText