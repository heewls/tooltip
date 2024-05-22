import styled from "styled-components";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
    return (
        <Container>
            <Tooltip
                direction="left"
                content=<div style={{ display: "flex", flexDirection: "column" }}>
                    <div>prmopt text dlrjs anjdi</div>
                </div>
                hover
            >
                <Content className="content">tooltip</Content>
            </Tooltip>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    background-color: #50a88c;
    width: 70px;
    text-align: center;
    color: white;
    font-weight: bolder;
    border-radius: 4px;
    border: none;
    font-size: 15px;
    padding: 2px 0;
    margin: 2px 2px;
    cursor: pointer;
    transition: 800ms ease all;
`;

export default App;
