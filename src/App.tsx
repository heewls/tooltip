import CustomTooltip from "./components/Example/CustomTooltip/CustomTooltip";
import Disable from "./components/Example/Disable/Disable";
import Normal from "./components/Example/Normal/Normal";
import Options from "./components/Example/Options/Options";
import Scroll from "./components/Example/Scroll/Scroll";
import VariousContent from "./components/Example/VariousContent/VariousContent";

function App() {
    return (
        <div style={{ backgroundColor: "#f4f7ff", height: "100vh" }}>
            <div style={{ display: "flex", gap: 30 }}>
                <Normal />
                <Scroll />
            </div>
            <Options />
            <VariousContent />
            <CustomTooltip />
            <Disable />
        </div>
    );
}

export default App;
