import "./App.css";
const header = document.querySelector("#main-header");
import AnimatedRoutes from "./AnimatedRoutes";
import Navigation from "./components/Navigation/Navigation";
import ReactDOM from "react-dom";
function App() {
  return (
    <>
      {ReactDOM.createPortal(<Navigation />, header)}
      <AnimatedRoutes></AnimatedRoutes>
    </>
  );
}

export default App;
