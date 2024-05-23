import CustomTooltip from "./components/Example/CustomTooltip/CustomTooltip";
import Normal from "./components/Example/Normal/Normal";
import Options from "./components/Example/Options/Options";
import VariousContent from "./components/Example/VariousContent/VariousContent";

function App() {
    return (
        <div style={{ backgroundColor: "#f4f7ff", height: "100vh" }}>
            <Normal />
            <Options />
            <VariousContent />
            <CustomTooltip />
        </div>
    );
}

export default App;
