import React from "react";
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
    givenIndex?: number
    $boxShadowColor?: string
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

const ColorPalette = ({$paddingLeft, $boxShadowColor, givenIndex}: ColorPaletteProps) => {
    return (
        <SColorPalette $paddingLeft={$paddingLeft}>
            {COLOR_LIST.map((it, index) =>
                <SColor key={index} $color={it.color}
                        $isSelected={givenIndex ? (index == givenIndex) : it.isSelected}
                        $boxShadowColor={$boxShadowColor}/>
            )}
        </SColorPalette>
    );
};

export default ColorPalette;