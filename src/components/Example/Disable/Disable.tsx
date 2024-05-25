import { useState } from "react";
import * as S from "./Disable.styles";
import Tooltip from "../../Tooltip/Tooltip";

export default function Disable() {
    const [disable, setDisable] = useState(false);
    return (
        <S.Container>
            <S.Button onClick={() => setDisable(!disable)} disable={disable}>
                {disable ? "Enable" : "Disable"}
            </S.Button>
            <Tooltip
                disabled={disable}
                direction="top"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
asperiores atque"
                style={{ width: "200px" }}
            >
                <S.Content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque
                </S.Content>
            </Tooltip>
        </S.Container>
    );
}
