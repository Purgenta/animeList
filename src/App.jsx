import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import ReactDOM from "react-dom";
import Loading from "./components/Loading/Loading";
import CurrentlyAiring from "./components/CurrentlyAiring/CurrentlyAiring";
import SimpleQueryCheck from "./components/AnimeList/SimpleQueryCheck";
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
          <Route
            path="/currently-airing/:page"
            element={<CurrentlyAiring />}
          ></Route>
          <Route path="/simple/:id" element={<SimpleQueryCheck />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
