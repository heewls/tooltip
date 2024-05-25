import styled from "styled-components";
import { LtoR, RtoL } from "../../keyframe";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TopContainer = styled.div`
    margin-bottom: 80px;
    white-space: nowrap;
`;
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const BottomContainer = styled.div``;

export const Content = styled.div`
    background-color: #50a88c;
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
`;
