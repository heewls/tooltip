import * as S from "./TooltipContent.styles";
import Icon from "../../../assets/svg/i.svg";

type TooltipContentProps = {
    openToast: () => void;
};

export default function TooltipContent({ openToast }: TooltipContentProps) {
    return (
        <S.Container>
            <S.MessageContainer>
                <S.Icon src={Icon} />
                <S.Message>Are you sure to delete this task?</S.Message>
            </S.MessageContainer>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <S.YesButton onClick={openToast}>Yes</S.YesButton>
            </div>
        </S.Container>
    );
}
