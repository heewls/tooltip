import * as S from "./Tooltip.styles";
import React, { useState } from "react";

export type TooltipDirection =
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
    direction?: TooltipDirection;
    enterDelay?: number;
    leaveDelay?: number;
    content: React.ReactNode;
    children: React.ReactNode;
    style?: React.CSSProperties;
    backgroundColor?: string;
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
    backgroundColor,
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
                <S.Message
                    style={style}
                    direction={direction}
                    backgroundColor={backgroundColor}
                    className={`${visible ? "visible" : ""} ${hover ? "hover" : ""}`}
                >
                    {content}
                </S.Message>
            </S.Content>
        </>
    );
}
