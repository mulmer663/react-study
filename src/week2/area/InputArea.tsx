import React, {useRef, useState} from "react";
import styled from "styled-components";
import {gridArea} from "../common/CommonProps";
import {flexAlign, highLightTheme, mainFont, SFlexBox} from "../common/CommonStyle";
import ColorPalette from "../component/ColorPalette";

const SInputArea = styled.div<gridArea>`
    grid-area: ${(props) => props.$gridArea};
    ${highLightTheme};
    margin-bottom: 15px;
    position: relative;
`;

const STextarea = styled.input`
    ${mainFont};
    background-color: white;
    width: 300px;
    height: 60px;
    font-size: 25px;
    border: 1px solid #ffffff;
    border-radius: 30px;
    outline: none;
    padding-left: 30px;
    padding-right: 70px;
    position: relative;
    top: 23px;
    right: 20px;

    &::placeholder {
        color: #cccccc;
    }

    &:focus {
        border: 2px solid rgba(114, 121, 131, 0.49);
    }
`;

const SAddButton = styled.button`
    background-color: #ff4d4d;
    ${mainFont};
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
    border: 0;
    border-radius: 35px;
    width: 120px;
    height: 50px;
    position: absolute;
    top: 30px;
    left: 360px;
    transition-duration: 0.3s;

    &:active {
        margin-left: 3px;
        margin-top: 3px;
    }
`;

const SWrap = styled.div`
    ${flexAlign};
    background-color: #feecdb;
    width: 235px;
    height: 40px;
    border: 0;
    border-radius: 30px;
    position: absolute;
    top: 98px;
    left: 205px;
`;

interface inputAreaProps extends gridArea {
    clickEventCallBack(text: string, color: string): void
}

/*
* 입력값과 색깔코드를 state로 가지고 있고
* 입력값은 변할 때마다 랜더링 되게 이벤트 세팅
* 색깔코드는 ColorPalette에서 onStateChange가 일어난다면 setColor를 호출하도록 함
* 클릭 이벤트시 입력값, 색깔코드를 초기화 하고 부모에게 클릭이벤트가 일어났다고 clickEventCallBack 호출해 알림
* 클릭이벤트시 ColorPalette의 List도 초기화 해주어야 하는데 어떻게?
* */
const InputArea = ({$gridArea, clickEventCallBack}: inputAreaProps) => {
    const [inputValue, setInputValue] = useState('');
    const [color, setColor] = useState('#f29b76');

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    const handleColorByPaletteStateChange = (newList: { color: string, isSelected: boolean }[]) => {
        const selectColor = newList.filter((it) => it.isSelected)[0].color;
        setColor(selectColor);
    }

    const _onClickEvent = (text: string, color: string) => {
        // TODO : 텍스트 verify 기능 추가
        clickEventCallBack(text, color);

        setInputValue('');
        setColor('#f29b76')
    }

    return (
        <SInputArea $gridArea={$gridArea}>
            <STextarea maxLength={13} placeholder={"TODO 입력"} onChange={(e) => {
                handleInputChange(e.target.value)
            }} value={inputValue}/>
            <SAddButton onClick={() => _onClickEvent(inputValue, color)}>ADD</SAddButton>
            <SWrap>
                <ColorPalette $paddingLeft={"0px"} $boxShadowColor={"#3d3d3d"} givenColor={color}
                              onStateChange={handleColorByPaletteStateChange}/>
            </SWrap>
        </SInputArea>
    );
}

export default InputArea;