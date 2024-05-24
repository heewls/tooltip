import Tooltip from "../../Tooltip/Tooltip";
import Prompt from "../Prompt";
import * as S from "./Options.styles";

export default function Options() {
    return (
        <S.Container>
            <Tooltip direction="topLeft" content={<Prompt />} enterDelay={1}>
                <S.Content>enter-delay 1s</S.Content>
            </Tooltip>
            <Tooltip direction="top" content={<Prompt />} leaveDelay={1}>
                <S.Content>leave-delay 1s</S.Content>
            </Tooltip>
            <Tooltip direction="topRight" content={<Prompt />} hover enterDelay={0.3} leaveDelay={0.3}>
                <S.Content>hover not hidden</S.Content>
            </Tooltip>
        </S.Container>
    );
}
