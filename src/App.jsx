import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import ReactDOM from "react-dom";
import Loading from "./components/Loading/Loading";
import CurrentlyAirring from "./components/CurrentlyAirring/CurrentlyAirring";
const header = document.querySelector("#main-header");
const Home = lazy(() => {
  return import("./components/Home/Home");
});
function App() {
  return (
    <>
      {ReactDOM.createPortal(<Navigation />, header)}
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/currently-airring"
            element={<CurrentlyAirring></CurrentlyAirring>}
          ></Route>
          <Route path=""></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
