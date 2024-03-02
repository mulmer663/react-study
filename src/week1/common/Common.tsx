import styled, {css} from "styled-components";

export interface props {
    value: string
}

export interface gridProps {
    $gridProps?: string,
}

export interface commonProps extends gridProps, props {
}

export const commonTheme = css`
    background-color: #444444;
    color: #00CC00;
    border: 1px solid #33FF00;
    font-family: "Courier", sans-serif;
`;

export const commonStyles = css`
    height: 100%;
    width: 100%;
    border-radius: 15px;
    font-size: 30px;
    font-weight: bold;
    ${commonTheme}
`;

export const SButton = styled.button`
    ${commonStyles}
`;