import { keyframes } from "styled-components";

export const RtoL = keyframes`
    from {
        left: 100%;
        width: 0;
    }
    to {
        left: 0;
        width: 100%;
    }
`;
export const LtoR = keyframes`
    from {
        right: 100%;
        width: 0;
    }
    to {
        right: 0;
        width: 100%;
    }
`;

export const RtoLReverse = keyframes`
    from {
        left: 0;
        width: 100%;
    }
    to {
        left: 100%;
        width: 0;
    }
`;

export const LtoRReverse = keyframes`
    from {
        right: 0;
        width: 100%;
    }
    to {
        right: 100%;
        width: 0;
    }
`;
