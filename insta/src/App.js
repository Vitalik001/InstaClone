import Posts from "./Posts";
import RightBar from "./RightBar/RightBar";
import LeftBar from "./LeftBar/LeftBar";

function App() {
  return (
    <div className="Main">
        <LeftBar></LeftBar>
      <Posts></Posts>
        <RightBar></RightBar>
    </div>
  );
}

export default App;
