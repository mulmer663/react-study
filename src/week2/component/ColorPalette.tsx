import React from "react";
import styled from "styled-components";

const COLOR_LIST = [
    {color: "#f29b76"},
    {color: "#facd89"},
    {color: "#cce198"},
    {color: "#89c997"},
    {color: "#7ecef4"},
    {color: "#8f82bc"},
    {color: "#c490bf"},
    {color: "#f29c9f"},
]

interface SColorProps {
    $color: string,
    $isSelected: boolean,
    $boxShadowColor?: string
}

interface SColorPaletteProps {
    $paddingLeft?: string
}

const SColorPalette = styled.div<SColorPaletteProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 24px;
    padding-left: ${(props) => props.$paddingLeft ?? "20px"};
    gap: 7px;
`;

const SColor = styled.div<SColorProps>`
    background-color: ${(props) => props.$color};
    width: ${(props) => props.$isSelected ? "20px" : "16px"};
    height: ${(props) => props.$isSelected ? "20px" : "16px"};
    border-radius: 50%;
    box-shadow: ${(props) => props.$isSelected ? `0 0 0 1px ${props.$boxShadowColor ?? "#ffffff"}` : "0 0 0 0"};
    transition: width 0.3s, height 0.3s, box-shadow 0.2s;

    ${SColorPalette}:hover &:hover {
        box-shadow: ${(props) => props.$isSelected ? `0 0 0 2px ${props.$boxShadowColor ?? "#ffffff"}` : "0 0 0 0"};
        width: 24px;
        height: 24px;
    }

    ${SColorPalette}:hover &:not(:hover) {
        box-shadow: ${(props) => props.$isSelected ? `0 0 0 2px ${props.$boxShadowColor ?? "#ffffff"}` : "0 0 0 0"};
        width: 20px;
        height: 20px;
    }

    ${SColorPalette}:hover &:active {
        box-shadow: 0 0 0 2px ${(props) => props.$boxShadowColor ?? "#ffffff"};
    }
`;

interface ColorPaletteProps extends SColorPaletteProps {
    $boxShadowColor?: string
    $color: string

    eventCallBack(color: string): void
}

/*
* COLOR_LIST를 state로 가지고 있고
* 클릭 이벤트시 리스트의 isSelected 값을 변경
* 그리고 부모에게 상태 변경되었다고 함수를 호출함
* */
const ColorPalette = ({$paddingLeft, $boxShadowColor, $color, eventCallBack}: ColorPaletteProps) => {
    const handleClickEvent = (color: string) => {
        eventCallBack(color);
    }

    return (
        <SColorPalette $paddingLeft={$paddingLeft}>
            {COLOR_LIST.map((it, index) =>
                <SColor key={index}
                        $color={it.color}
                        $isSelected={it.color === $color}
                        $boxShadowColor={$boxShadowColor}
                        onClick={() => handleClickEvent(it.color)}/>
            )}
        </SColorPalette>
    );
};

export default ColorPalette;