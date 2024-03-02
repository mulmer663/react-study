import React from "react";
import {props, SButton} from "./Common";

const Button = ({value}: props) => {
    return (
        <SButton type="button">
            {value}
        </SButton>
    );
}

export default Button;