import * as S from "./Alert.styles";
import IconCheck from "../../../../assets/svg/check.svg";
import IconX from "../../../../assets/svg/x.svg";
import { useEffect } from "react";

type AlertProps = {
    visible: boolean;
    closeToast: () => void;
};

export default function Alert({ visible, closeToast }: AlertProps) {
    useEffect(() => {
        if (visible) {
            const close = setTimeout(() => {
                closeToast();
            }, 3000);
            return () => clearTimeout(close);
        }
    }, [visible, closeToast]);

    return (
        visible && (
            <S.AlertContainer>
                <S.CheckContainer>
                    <S.Check src={IconCheck} />
                </S.CheckContainer>
                <S.Container>
                    <S.AlertText>right tooltip confirm clicked on Yes.</S.AlertText>
                    <S.CloseAlert src={IconX} onClick={closeToast} />
                </S.Container>
            </S.AlertContainer>
        )
    );
}
