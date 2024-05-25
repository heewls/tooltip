import styled from "styled-components";
import { LtoR, RtoL } from "../../keyframe";

type Props = {
    disable: boolean;
};

export const Container = styled.div`
    display: flex;
`;

export const Button = styled.button<Props>`
    background-color: ${(props) => (props.disable ? "grey" : "black")};
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
    transition: 800ms ease all;
    position: relative;

    &:hover {
        background-color: white;
        color: ${(props) => (props.disable ? "grey" : "black")};
    }

    &:hover::before,
    &:hover::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${(props) => (props.disable ? "grey" : "black")};
    }

    &:hover::before {
        top: 0;
        animation: ${RtoL} 0.8s;
    }

    &:hover::after {
        bottom: 0;
        animation: ${LtoR} 0.8s;
    }
`;

export const Content = styled.div`
    background-color: #e8e5e5;
    border-radius: 8px;
    padding: 5px;
    margin-left: 10px;
    width: auto;
`;
