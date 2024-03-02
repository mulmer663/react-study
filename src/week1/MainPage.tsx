import React, {useState} from "react";
import styled from "styled-components";
import HistoryArea from "./HistoryArea";
import MainText from "./MainText";
import GridButton from "./common/GridButton";
import BottomButtonArea from "./BottomButtonArea";
import {commonTheme} from "./common/Common";

// grid 스타일 설정
const SMainPage
    = styled.div`
    ${commonTheme};
    background-color: #222222;
    height: auto;
    width: auto;
    padding: 100px;
    border-radius: 20px;
    display: grid;
    grid-template-columns: repeat(5, 80px);
    grid-template-rows: 80px 80px 80px 80px 80px 80px;
    gap: 12px;
    grid-template-areas: 
        "H M M M M"
        "H M M M M"
        "H M M M M"
        "H M M M M"
        "H BP BP BM BM"
        "B B B B B"
`;

const bottomButtons = [1, 2, 3, 4, 5];
const historyButtons = ['', '', '', ''];

const pushHistoryArr = (currentVal: number, historyArr : string[]) => {
    historyArr.shift()
    historyArr.push(currentVal.toString())
    return historyArr;
}

const MainPage = () => {
    const [currentVal, setCurrentVal] = useState(0);
    const [selectedVal, setSelectedVal] = useState(1);
    const [historyArr, setHistoryArr] = useState(historyButtons);

    const handleChangeSelectedVal = (val: string) => setSelectedVal(parseInt(val))
    const handleChangeCurrentVal = (isPlus: boolean) => {
        setHistoryArr(pushHistoryArr(currentVal, historyArr));
        if (isPlus) {
            setCurrentVal(currentVal + selectedVal)
        } else {
            setCurrentVal(currentVal - selectedVal)
        }
    }

    const clearHistoryArr = () => setHistoryArr(historyArr.fill(''))

    return (
        <SMainPage>
            <HistoryArea gridProps={"H"} historyArr={historyArr} onClick={clearHistoryArr}/>
            <MainText gridProps={"M"} value={currentVal.toString()}/>
            <GridButton gridProps={"BP"} value={"+"} onClick={() => handleChangeCurrentVal(true)}/>
            <GridButton gridProps={"BM"} value={"-"} onClick={() => handleChangeCurrentVal(false)}/>
            <BottomButtonArea gridProps={"B"} bottomButtons={bottomButtons} onClick={handleChangeSelectedVal}
                              selectedVal={selectedVal}/>
        </SMainPage>
    );
}

export default MainPage;