import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
import Search from "./components/Search/Search";
import { AnimatePresence } from "framer-motion";
import DetailedCharacter from "./components/DetailedCharacter/DetailedCharacter";
const DetailedAnime = lazy(() => {
  return import("./components/DetailedAnime/DetailedAnime");
});
const Home = lazy(() => {
  return import("./components/Home/Home");
});
const CurrentlyAiring = lazy(() => {
  return import("./components/CurrentlyAiring/CurrentlyAiring");
});
const TopRated = lazy(() => {
  return import("./components/TopRated/TopRated");
});
const Producer = lazy(() => {
  return import("./components/Producer/Producer");
});
export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<Loading></Loading>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/currently-airing/:page"
            element={<CurrentlyAiring />}
          ></Route>
          <Route
            path="/top-rated/:page"
            element={<TopRated></TopRated>}
          ></Route>
          <Route path="/anime/:id" element={<DetailedAnime />}></Route>
          <Route
            path="/character/:id"
            element={<DetailedCharacter></DetailedCharacter>}
          ></Route>
          <Route path="/search/:searchName" element={<Search />}></Route>
          <Route
            path="/search/:searchName/:page"
            element={<Search></Search>}
          ></Route>
          <Route path="/producer/:id" element={<Producer></Producer>} />
          <Route
            path="/producer/:id/:page"
            element={<Producer></Producer>}
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="" element={<Home />}></Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
