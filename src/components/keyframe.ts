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
