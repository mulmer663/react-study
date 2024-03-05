import React from "react";
import styled from "styled-components";


const SLabel = styled.label``;
const SInput = styled.input.attrs({type: "checkbox"})`
    display: none;

    // 체크되었을 때 테투리 설정 
    &:checked + .checkbox_icon {
        border-color: #56657c;
        background-color: #56657c;
        color: #1b1f2b;
    }

    // 체크되었을 때 가상요소 before
    &:checked + .checkbox_icon::before {
        height: 10px; // 높이값 지정
        transition: all 0.15s ease; // 0.15초 변화시간 줌
    }

    // 체크되었을 때 가상요소 after
    &:checked + .checkbox_icon::after {
        height: 20px; // 높이값 지정
        transition: all 0.15s ease 0.15s; // 0.15초 변화시간 + 딜레이 시간 줌
    }
`;

const SCheckBox_Icon = styled.span`
    display: inline-block;
    width: 22px;
    height: 22px;
    background-color: #fcebda;
    border: 1px solid #fcebda;
    position: relative;
    cursor: pointer;
    border-radius: 3px;

    // 체크박스 가상요소

    &:before, &:after {
        content: ''; // 가상요소 필수값
        display: inline-block; // 크기 지정
        width: 4px;
        height: 0; // 체크박스가 체크가 되면 변화값으로 커지게 하기 위해 (일단 화면에는 나타나지 않음)
        background-color: #1b1f2b;
        position: absolute; // 체크박스 테두리 기준으로 위치조정 가능
        transform-origin: left top; // 기울기 지정, 기준점을 왼쪽 상단 모서리로 (기본값은 중심임)
    }

    // 가상요소 before
    &:before {
        top: 11px; // 위치값 top
        left: 2px; // 위치값 left
        transform: rotate(-45deg); // 회전값
    }

    // 가상요소 after 
    &:after {
        top: 18px; // 위치값 top
        left: 9px; // 위치값 left
        transform: rotate(-135deg); // 회전값
    }
`;

const CheckBox = () => {
    return (
        <SLabel>
            <SInput type="checkbox"/>
            <SCheckBox_Icon className="checkbox_icon"></SCheckBox_Icon>
        </SLabel>
    );
}
export default CheckBox;