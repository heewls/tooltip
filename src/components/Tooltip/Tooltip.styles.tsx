import styled from "styled-components";

export const Message = styled.div`
    background-color: black;
    padding: 2px 8px;
    box-sizing: border-box;
    font-size: 14px;
    margin: 0;
    width: max-content;
    display: block;
    border-radius: 5px;
    color: white;
    visibility: hidden;
    z-index: 999;
    position: absolute;

    transform: translate(100%, -50%);
    top: 50%;
    left: 0%;
    margin-left: -60px;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -6px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent black transparent transparent;
    }

    &.visible {
        visibility: visible;
    }

    &.hover:hover {
        visibility: visible;
    }
`;

export const Content = styled.div`
    display: inline-block;
    position: relative;
`;
