import Tooltip from "../../Tooltip/Tooltip";
import * as S from "./Normal.styles";
import Prompt from "../Prompt";

export default function Normal() {
    return (
        <S.Container>
            <S.LeftContainer>
                <Tooltip direction="leftTop" content={<Prompt />}>
                    <S.Content className="content">LT</S.Content>
                </Tooltip>
                <Tooltip direction="left" content={<Prompt />}>
                    <S.Content className="content">Left</S.Content>
                </Tooltip>
                <Tooltip direction="leftBottom" content={<Prompt />}>
                    <S.Content className="content">LB</S.Content>
                </Tooltip>
            </S.LeftContainer>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <S.TopContainer>
                    <Tooltip direction="topLeft" content={<Prompt />}>
                        <S.Content className="content">TL</S.Content>
                    </Tooltip>
                    <Tooltip direction="top" content={<Prompt />}>
                        <S.Content className="content">Top</S.Content>
                    </Tooltip>
                    <Tooltip direction="topRight" content={<Prompt />}>
                        <S.Content className="content">TR</S.Content>
                    </Tooltip>
                </S.TopContainer>
                <S.BottomContainer>
                    <Tooltip direction="bottomLeft" content={<Prompt />}>
                        <S.Content className="content">BL</S.Content>
                    </Tooltip>
                    <Tooltip direction="bottom" content={<Prompt />}>
                        <S.Content className="content">Bottom</S.Content>
                    </Tooltip>
                    <Tooltip direction="bottomRight" content={<Prompt />}>
                        <S.Content className="content">BR</S.Content>
                    </Tooltip>
                </S.BottomContainer>
            </div>
            <S.RightContainer>
                <Tooltip direction="rightTop" content={<Prompt />}>
                    <S.Content className="content">RT</S.Content>
                </Tooltip>
                <Tooltip direction="right" content={<Prompt />}>
                    <S.Content className="rightBottom">Right</S.Content>
                </Tooltip>
                <Tooltip direction="rightTop" content={<Prompt />}>
                    <S.Content className="content">RT</S.Content>
                </Tooltip>
            </S.RightContainer>
        </S.Container>
    );
}
