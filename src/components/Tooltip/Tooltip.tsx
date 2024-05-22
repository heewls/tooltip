import * as S from "./Tooltip.styles";

import React, { useState } from "react";

type TooltipPosition =
    | "left"
    | "right"
    | "bottom"
    | "top"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";

interface TooltipProps {
    direction?: TooltipPosition;
    enterDelay?: number;
    leaveDelay?: number;
    content: React.ReactNode;
    children: React.ReactNode;
    style?: React.CSSProperties;
    disabled?: boolean;
    hover?: boolean;
}

export default function Tooltip({
    direction = "bottom",
    enterDelay = 0,
    leaveDelay = 0,
    content,
    children,
    style,
    disabled = false,
    hover = false,
}: TooltipProps) {
    const [visible, setVisible] = useState<boolean>(false);

    const showTooltip = () => {
        if (disabled) return;
        if (enterDelay) {
            setTimeout(() => {
                setVisible(true);
            }, enterDelay * 1000);
        } else setVisible(true);
    };

    const hideTooltip = () => {
        setTimeout(() => {
            setVisible(false);
        }, leaveDelay * 1000);
    };

    return (
        <>
            <S.Content onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                {children}
                <S.Message style={style} className={`${direction} ${visible ? "visible" : ""} ${hover ? "hover" : ""}`}>
                    {content}
                </S.Message>
            </S.Content>
        </>
    );
}

/* 
    &.arrow {
        color: black;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px;
        position: absolute;
    } */

/* &.bottom::after {
        content: "";
        position: absolute;
        background-color: black;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    } */
