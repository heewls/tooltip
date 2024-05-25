import CustomTooltip from "./CustomTooltip/CustomTooltip";
import Disable from "./Disable/Disable";
import * as S from "./Example.styles";
import Normal from "./Normal/Normal";
import Options from "./Options/Options";
import Scroll from "./Scroll/Scroll";
import VariousContent from "./VariousContent/VariousContent";

export default function Example() {
    return (
        <S.ExampleContainer>
            <S.Container>
                <Normal />
                <S.ScrollContainer>
                    <Scroll />
                </S.ScrollContainer>
            </S.Container>
            <Options />
            <VariousContent />
            <CustomTooltip />
            <Disable />
        </S.ExampleContainer>
    );
}
