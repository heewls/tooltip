import Alert from "./Alert/Alert";
import Tooltip from "../../Tooltip/Tooltip";
import TooltipContent from "./TooltipContent";
import * as S from "./VariousContent.styles";
import { useState } from "react";

export default function VariousContent() {
    const [visible, setVisible] = useState<boolean>(false);

    const closeToast = () => setVisible(false);

    const openToast = () => setVisible(true);

    return (
        <S.Container>
            <Alert visible={visible} closeToast={closeToast} />
            <Tooltip
                backgroundColor="white"
                direction="left"
                content={<TooltipContent openToast={openToast} />}
                leaveDelay={0.5}
                hover
            >
                <S.Content>Left</S.Content>
            </Tooltip>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Tooltip
                    backgroundColor="white"
                    direction="top"
                    content={<TooltipContent openToast={openToast} />}
                    leaveDelay={0.5}
                    hover
                >
                    <S.Content style={{ marginBottom: 25 }}>Top</S.Content>
                </Tooltip>
                <Tooltip
                    backgroundColor="white"
                    direction="bottom"
                    content={<TooltipContent openToast={openToast} />}
                    leaveDelay={0.5}
                    hover
                >
                    <S.Content>Bottom</S.Content>
                </Tooltip>
            </div>
            <Tooltip
                backgroundColor="white"
                direction="right"
                content={<TooltipContent openToast={openToast} />}
                leaveDelay={0.5}
                hover
            >
                <S.Content>Right</S.Content>
            </Tooltip>
        </S.Container>
    );
}
