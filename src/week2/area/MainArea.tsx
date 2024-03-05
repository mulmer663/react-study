import React from "react";
import styled from "styled-components";
import {gridArea} from "../common/CommonProps";
import {mainTheme} from "../common/CommonStyle";
import ToDo from "../component/ToDo";

const SMainArea = styled.div<gridArea>`
    grid-area: ${(props) => (props.$gridArea)};
    ${mainTheme};
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    gap: 10px;
    padding: 25px;
`;

const MainArea = ({$gridArea}:gridArea) => {
    return (
        <SMainArea $gridArea={$gridArea}>
            <ToDo  $color={"#f29b76"} $isFinish={false} $isFocus={false} giveText={"리액트 공부하기"}></ToDo>
            <ToDo  $color={"#cce198"} $isFinish={true} $isFocus={false} giveText={"스프링 공부하기"}></ToDo>
            <ToDo  $color={"#7ecef4"} $isFinish={false} $isFocus={true} giveText={"운동하기"}></ToDo>
            <ToDo  $color={"#8f82bc"} $isFinish={false} $isFocus={false} giveText={"독서하기"}></ToDo>
            <ToDo  $color={"#facd89"} $isFinish={false} $isFocus={false} giveText={"자바스크립트 promiss 공부하기"}></ToDo>
        </SMainArea>
    );
}

export default MainArea;
