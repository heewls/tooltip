import styled from "styled-components";
import { LtoR, LtoRReverse, RtoL, RtoLReverse } from "../../keyframe";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* position: relative; */
`;

export const Content = styled.div`
    background-color: #50a88c;
    width: 70px;
    height: auto;
    text-align: center;
    color: white;
    font-weight: bolder;
    border-radius: 4px;
    border: none;
    font-size: 15px;
    padding: 2px 0;
    margin: 2px;
    cursor: pointer;
    position: relative;
    transition: 800ms ease all;

    &:hover {
        background-color: white;
        color: #50a88c;
    }

    &:hover::before,
    &:hover::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #50a88c;
    }
    &:hover::before {
        top: 0;
        animation: ${RtoL} 0.8s;
    }

    &:hover::after {
        bottom: 0;
        animation: ${LtoR} 0.8s;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #50a88c;
    }

    &::before {
        top: 0;
        animation: ${RtoLReverse} 0.8s forwards;
    }

    &::after {
        bottom: 0;
        animation: ${LtoRReverse} 0.8s forwards;
    }
`;
