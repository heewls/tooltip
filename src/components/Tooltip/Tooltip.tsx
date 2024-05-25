import * as S from "./Tooltip.styles";
import React, { useCallback, useEffect, useRef, useState } from "react";

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
    const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    const calculateDirection = useCallback(() => {
        if (!tooltipRef.current) return;

        const parentD = (tooltipRef.current.parentNode as HTMLElement)?.getBoundingClientRect();
        const tooltipD = tooltipRef.current.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const scrollLeft = document.documentElement.scrollLeft;

        const newDirection = { top: 0, left: 0 };

        if (parentD) {
            switch (direction) {
                case "left":
                    newDirection.top = parentD.top + (parentD.height - tooltipD.height) / 2 + scrollTop;
                    newDirection.left = parentD.left - tooltipD.width - 6 + scrollLeft;
                    break;
                case "leftTop":
                    newDirection.top = parentD.top + scrollTop;
                    newDirection.left = parentD.left - tooltipD.width - 6 + scrollLeft;
                    break;
                case "leftBottom":
                    newDirection.top = parentD.bottom + scrollTop - tooltipD.height;
                    newDirection.left = parentD.left - tooltipD.width - 6 + scrollLeft;
                    break;
                case "right":
                    newDirection.top = parentD.top + (parentD.height - tooltipD.height) / 2 + scrollTop;
                    newDirection.left = parentD.right + 6 + scrollLeft;
                    break;
                case "rightTop":
                    newDirection.top = parentD.top + scrollTop;
                    newDirection.left = parentD.right + 6 + scrollLeft;
                    break;
                case "rightBottom":
                    newDirection.top = parentD.bottom + scrollTop - tooltipD.height;
                    newDirection.left = parentD.right + 6 + scrollLeft;
                    break;
                case "bottom":
                    newDirection.top = parentD.bottom + scrollTop + 6;
                    newDirection.left = parentD.left + scrollLeft + (parentD.width - tooltipD.width) / 2;
                    break;
                case "bottomLeft":
                    newDirection.top = parentD.bottom + scrollTop + 6;
                    newDirection.left = parentD.left + scrollLeft;
                    break;
                case "bottomRight":
                    newDirection.top = parentD.bottom + scrollTop + 6;
                    newDirection.left = parentD.right - tooltipD.width + scrollLeft;
                    break;
                case "top":
                    newDirection.top = parentD.top + scrollTop - tooltipD.height - 6;
                    newDirection.left = parentD.left + scrollLeft + (parentD.width - tooltipD.width) / 2;
                    break;
                case "topLeft":
                    newDirection.top = parentD.top + scrollTop - tooltipD.height - 6;
                    newDirection.left = parentD.left + scrollLeft;
                    break;
                case "topRight":
                    newDirection.top = parentD.top + scrollTop - tooltipD.height - 6;
                    newDirection.left = parentD.right - tooltipD.width + scrollLeft;
                    break;
            }
        }

        setPosition(newDirection);
    }, [direction]);

    useEffect(() => {
        if (visible) {
            calculateDirection();
            window.addEventListener("scroll", calculateDirection);
            return () => {
                window.removeEventListener("scroll", calculateDirection);
            };
        }
    }, [direction, visible, calculateDirection]);

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
        <S.Content onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            <S.Tooltip
                ref={tooltipRef}
                style={{ ...style, position: "absolute", top: position.top, left: position.left }}
                direction={direction}
                backgroundColor={backgroundColor}
                className={`${visible ? "visible" : ""} ${hover ? "hover" : ""}`}
            >
                {typeof content === "string" ? <div>{content}</div> : content}
            </S.Tooltip>
        </S.Content>
    );
}
