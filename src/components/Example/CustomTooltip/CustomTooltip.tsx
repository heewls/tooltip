import Tooltip from "../../Tooltip/Tooltip";
import * as S from "./CustomTooltip.styles";

export default function CustomTooltip() {
    return (
        <S.Container>
            <Tooltip content="pink" backgroundColor="#f3aecb" direction="top">
                <S.PinkContent>Pink</S.PinkContent>
            </Tooltip>
            <Tooltip content="yellow" direction="top" backgroundColor="#fdf1b2" style={{ color: "black" }}>
                <S.YellowContent>Yellow</S.YellowContent>
            </Tooltip>
        </S.Container>
    );
}
