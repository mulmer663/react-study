import React from 'react';
import './styles.css';
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import ToDoPage from "./week2/ToDoPage";
import {Provider} from "react-redux";
import {store} from "./week2/reducers/store";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Provider store={store}>
                <ToDoPage/>
            </Provider>
        </div>
    );
}

export default App;
