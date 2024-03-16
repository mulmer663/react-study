import styled, {css} from "styled-components";


export const flexAlign = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const titleFont = css`
    font-family: 'GmarketSansMedium',sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 33px;
`;

export const mainFont = css`
    font-family: "Noto Sans KR", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
`;

export const mainTheme = css`
    background-color: #2a2d3c;
    color: #ffffff;
    border: 1px solid #2a2d3c;
    border-radius: 10px;
`;

export const inAndOutTheme = css`
    background-color: #1b1f2b;
    color: #b6c2db;
`;

export const hoverTheme = css`
    background-color: #7c7e93 ;
    color: #ffffff;
    border: 1px solid #7c7e93;
    border-radius: 10px;
`;

export const highLightTheme = css`
    background-color: #56657c;
    color: #ffffff;
    border: 1px solid #56657c;
    border-radius: 10px;
`;

interface direction {
    $direction: string
}

export const SFlexBox = styled.div<direction>`
    display: flex;
    flex-direction: ${(props) => props.$direction};
    align-items: center;
    justify-content: space-between;
`;