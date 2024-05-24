import styled from "styled-components";

type Props = {
    disable: boolean;
};

export const Container = styled.div`
    display: flex;
`;

export const Button = styled.button<Props>`
    background-color: ${(props) => (props.disable ? "black" : "grey")};
    width: 70px;
    text-align: center;
    color: white;
    font-weight: bolder;
    border-radius: 4px;
    border: none;
    font-size: 15px;
    padding: 2px 0;
    margin: 2px;
    cursor: pointer;
`;

export const Content = styled.div`
    background-color: #e8e5e5;
    border-radius: 8px;
    padding: 5px;
    margin-left: 10px;
    width: auto;
`;
