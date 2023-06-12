import Posts from "./Posts";
import RightBar from "./RightBar/RightBar";
import LeftBar from "./LeftBar/LeftBar";
import Stories from "./Stories";

function App() {
  return (
    <div className="Main">
        <LeftBar></LeftBar>
        <div className="Main-content">
        <Stories></Stories>
        <Posts></Posts>
        </div>
        <RightBar></RightBar>
    </div>
  );
}

export default App;
