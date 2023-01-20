import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import ReactDOM from "react-dom";
import Loading from "./components/Loading/Loading";
import Search from "./components/Search/Search";
const DetailedAnime = lazy(() => {
  return import("./components/DetailedAnime/DetailedAnime");
});
const header = document.querySelector("#main-header");
const Home = lazy(() => {
  return import("./components/Home/Home");
});
const CurrentlyAiring = lazy(() => {
  return import("./components/CurrentlyAiring/CurrentlyAiring");
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
          <Route path="/anime/:id" element={<DetailedAnime />}></Route>
          <Route path="/character/:id"></Route>
          <Route path="/search/:searchName" element={<Search />}></Route>
          <Route
            path="/search/:searchName/:page"
            element={<Search></Search>}
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
