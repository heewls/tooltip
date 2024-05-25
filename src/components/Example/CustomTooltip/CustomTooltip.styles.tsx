import styled from "styled-components";
import { LtoR, LtoRReverse, RtoL, RtoLReverse } from "../../keyframe";

export const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 100px 0;
`;

export const PinkContent = styled.div`
    background-color: #f3aecb;
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
        color: #f3aecb;
    }

    &:hover::before,
    &:hover::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #f3aecb;
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
        background-color: #f3aecb;
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

export const YellowContent = styled.div`
    background-color: #fdf1b2;
    width: 70px;
    text-align: center;
    color: black;
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
        color: #fdf1b2;
    }

    &:hover::before,
    &:hover::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #fdf1b2;
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
        background-color: #fdf1b2;
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
