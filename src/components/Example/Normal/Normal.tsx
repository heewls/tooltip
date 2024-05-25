import Tooltip from "../../Tooltip/Tooltip";
import * as S from "./Normal.styles";
import Prompt from "../Prompt";

export default function Normal() {
    return (
        <S.Container>
            <S.LeftContainer>
                <Tooltip direction="leftTop" content={<Prompt />} backgroundColor="red">
                    <S.Content>LT</S.Content>
                </Tooltip>
                <Tooltip direction="left" content={<Prompt />}>
                    <S.Content>Left</S.Content>
                </Tooltip>
                <Tooltip direction="leftBottom" content={<Prompt />}>
                    <S.Content>LB</S.Content>
                </Tooltip>
            </S.LeftContainer>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <S.TopContainer>
                    <Tooltip direction="topLeft" content={<Prompt />}>
                        <S.Content>TL</S.Content>
                    </Tooltip>
                    <Tooltip direction="top" content={<Prompt />}>
                        <S.Content>Top</S.Content>
                    </Tooltip>
                    <Tooltip direction="topRight" content={<Prompt />}>
                        <S.Content>TR</S.Content>
                    </Tooltip>
                </S.TopContainer>
                <S.BottomContainer>
                    <Tooltip direction="bottomLeft" content={<Prompt />}>
                        <S.Content>BL</S.Content>
                    </Tooltip>
                    <Tooltip direction="bottom" content={<Prompt />}>
                        <S.Content>Bottom</S.Content>
                    </Tooltip>
                    <Tooltip direction="bottomRight" content={<Prompt />}>
                        <S.Content>BR</S.Content>
                    </Tooltip>
                </S.BottomContainer>
            </div>
            <S.RightContainer>
                <Tooltip direction="rightTop" content={<Prompt />}>
                    <S.Content>RT</S.Content>
                </Tooltip>
                <Tooltip direction="right" content={<Prompt />}>
                    <S.Content>Right</S.Content>
                </Tooltip>
                <Tooltip direction="rightBottom" content={<Prompt />}>
                    <S.Content>RB</S.Content>
                </Tooltip>
            </S.RightContainer>
        </S.Container>
    );
}
