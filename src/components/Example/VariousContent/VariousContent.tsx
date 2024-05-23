import Tooltip from "../../Tooltip/Tooltip";
import TooltipContent from "./TooltipContent";
import * as S from "./VariousContent.styles";

export default function VariousContent() {
    return (
        <S.Container>
            <Tooltip backgroundColor="white" direction="left" content={<TooltipContent />} leaveDelay={0.5} hover>
                <S.Content>Left</S.Content>
            </Tooltip>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Tooltip backgroundColor="white" direction="top" content={<TooltipContent />} leaveDelay={0.5} hover>
                    <S.Content style={{ marginBottom: 25 }}>Top</S.Content>
                </Tooltip>
                <Tooltip backgroundColor="white" direction="bottom" content={<TooltipContent />} leaveDelay={0.5} hover>
                    <S.Content>Bottom</S.Content>
                </Tooltip>
            </div>
            <Tooltip backgroundColor="white" direction="right" content={<TooltipContent />} leaveDelay={0.5} hover>
                <S.Content>Right</S.Content>
            </Tooltip>
        </S.Container>
    );
}
