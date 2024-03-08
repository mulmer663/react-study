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
    $isSelected: boolean
}

interface ColorPaletteProps {
    givenIndex?: number
}


const SColorPalette = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 24px;
    padding-left: 20px;
    gap: 7px;
`;

const SColor = styled.div<SColorProps>`
    background-color: ${(props) => props.$color};
    width: ${(props) => props.$isSelected ? "20px" : "16px"};
    height: ${(props) => props.$isSelected ? "20px" : "16px"};
    border-radius: 50%;
    box-shadow: ${(props) => props.$isSelected ? "0 0 0 1px #d9d9d9" : "0 0 0 0"};
    transition: width 0.3s, height 0.3s, box-shadow 0.2s;

    ${SColorPalette}:hover &:hover {
        box-shadow: ${(props) => props.$isSelected ? "0 0 0 2px #d9d9d9" : "0 0 0 0"};
        width: 24px;
        height: 24px;
    }

    ${SColorPalette}:hover &:not(:hover) {
        box-shadow: ${(props) => props.$isSelected ? "0 0 0 2px #d9d9d9" : "0 0 0 0"};
        width: 20px;
        height: 20px;
    }

    ${SColorPalette}:hover &:active {
        box-shadow: 0 0 0 2px #d9d9d9;
    }
`;

const ColorPalette = ({givenIndex} : ColorPaletteProps) => {
    return (
        <SColorPalette>
            {COLOR_LIST.map((it, index) =>
                <SColor key={index} $color={it.color}
                        $isSelected={givenIndex ? (index == givenIndex) : it.isSelected}/>
            )}
        </SColorPalette>
    );
};

export default ColorPalette;