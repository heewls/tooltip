import styled from "styled-components";

export const AlertContainer = styled.div`
    background-color: #62a1f3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 33px;
    width: 280px;
    border-radius: 4px;
    white-space: nowrap;
    position: fixed;
    top: 8px;
    left: calc(50% - 140px);
`;

export const CheckContainer = styled.div`
    background-color: #477fca;
    height: 100%;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px 0 0 4px;
`;

export const Check = styled.img`
    width: 15px;
    height: 15px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AlertText = styled.p`
    color: white;
    font-size: 14px;
`;

export const CloseAlert = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 5px;
    cursor: pointer;
`;
