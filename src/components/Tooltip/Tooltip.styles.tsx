import styled, { css } from "styled-components";
import { TooltipDirection } from "./Tooltip";

type Props = {
    direction: TooltipDirection;
    backgroundColor: string | undefined;
};

export const Tooltip = styled.div<Props>`
    background-color: ${(props) => props.backgroundColor || "black"};
    padding: 4px 8px;
    box-sizing: border-box;
    font-size: 12px;
    margin: 0;
    width: max-content;
    min-height: 25px;
    display: block;
    border-radius: 5px;
    color: white;
    visibility: hidden;
    z-index: 999;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    ::after {
        content: "";
        position: absolute;
        border-style: solid;
        border-width: 5px;

        ${(props) => {
            switch (props.direction) {
                case "left":
                    return css`
                        top: 50%;
                        left: 100%;
                        margin-top: -6px;
                        border-color: transparent transparent transparent ${props.backgroundColor || "black"};
                    `;
                case "leftTop":
                    return css`
                        top: 9px;
                        left: 100%;
                        border-color: transparent transparent transparent ${props.backgroundColor || "black"};
                    `;
                case "leftBottom":
                    return css`
                        bottom: 9px;
                        left: 100%;
                        border-color: transparent transparent transparent ${props.backgroundColor || "black"};
                    `;
                case "right":
                    return css`
                        top: 50%;
                        right: 100%;
                        margin-top: -6px;
                        border-color: transparent ${props.backgroundColor || "black"} transparent transparent;
                    `;
                case "rightTop":
                    return css`
                        top: 9px;
                        right: 100%;
                        border-color: transparent ${props.backgroundColor || "black"} transparent transparent;
                    `;
                case "rightBottom":
                    return css`
                        bottom: 9px;
                        right: 100%;
                        border-color: transparent ${props.backgroundColor || "black"} transparent transparent;
                    `;
                case "bottom":
                    return css`
                        top: -10px;
                        left: 50%;
                        margin-left: -5px;
                        border-color: transparent transparent ${props.backgroundColor || "black"} transparent;
                    `;
                case "bottomLeft":
                    return css`
                        top: -10px;
                        left: 6px;
                        border-color: transparent transparent ${props.backgroundColor || "black"} transparent;
                    `;
                case "bottomRight":
                    return css`
                        top: -10px;
                        right: 6px;
                        border-color: transparent transparent ${props.backgroundColor || "black"} transparent;
                    `;
                case "top":
                    return css`
                        bottom: -10px;
                        left: 50%;
                        margin-left: -5px;
                        border-color: ${props.backgroundColor || "black"} transparent transparent transparent;
                    `;
                case "topLeft":
                    return css`
                        bottom: -10px;
                        left: 6px;
                        border-color: ${props.backgroundColor || "black"} transparent transparent transparent;
                    `;
                case "topRight":
                    return css`
                        bottom: -10px;
                        right: 6px;
                        border-color: ${props.backgroundColor || "black"} transparent transparent transparent;
                    `;
            }
        }};
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
`;
