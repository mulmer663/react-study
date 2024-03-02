import React from 'react';
import './styles.css';
import MainPage from "./week1/MainPage";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <MainPage/>
        </div>
    );
}

export default App;
