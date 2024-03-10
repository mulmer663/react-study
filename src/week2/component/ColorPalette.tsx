import React, {useEffect, useState} from "react";
import styled from "styled-components";

const COLOR_LIST = [
    {color: "#f29b76", isSelected: true},
    {color: "#facd89", isSelected: false},
    {color: "#cce198", isSelected: false},
    {color: "#89c997", isSelected: false},
    {color: "#7ecef4", isSelected: false},
    {color: "#8f82bc", isSelected: false},
    {color: "#c490bf", isSelected: false},
    {color: "#f29c9f", isSelected: false},
]

interface SColorProps {
    $color: string,
    $isSelected: boolean,
    $boxShadowColor?: string
}

interface SColorPaletteProps {
    $paddingLeft?: string
}

interface ColorPaletteProps extends SColorPaletteProps {
    $boxShadowColor?: string
    givenColor: string

    onStateChange(list: { color: string, isSelected: boolean }[]): void
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

/*
* COLOR_LIST를 state로 가지고 있고
* 클릭 이벤트시 리스트의 isSelected 값을 변경
* 그리고 부모에게 상태 변경되었다고 함수를 호출함
* */
const ColorPalette = ({$paddingLeft, $boxShadowColor, onStateChange, givenColor}: ColorPaletteProps) => {
    const [list, setList] = useState(COLOR_LIST);

    const handleClickEvent = (index: number) => {
        const newList = [...COLOR_LIST];
        newList.forEach((it) => it.isSelected = false);
        newList[index].isSelected = true;
        setList(newList);
        onStateChange(newList);
    }

    useEffect(() => {
        const newList = [...COLOR_LIST];
        newList.forEach((it) => it.isSelected = false);
        newList.filter((it) => it.color === givenColor)[0].isSelected = true
        setList(newList);
    }, [givenColor]);

    return (
        <SColorPalette $paddingLeft={$paddingLeft}>
            {list.map((it, index) =>
                <SColor key={index}
                        $color={it.color}
                        $isSelected={it.isSelected}
                        $boxShadowColor={$boxShadowColor}
                        onClick={() => handleClickEvent(index)}/>
            )}
        </SColorPalette>
    );
};

export default ColorPalette;