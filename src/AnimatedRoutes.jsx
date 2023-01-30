import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
import { AnimatePresence } from "framer-motion";
import DetailedCharacter from "./components/DetailedCharacter/DetailedCharacter";
const Genre = lazy(() => {
  return import("./components/Navigation/Genre");
});
const Search = lazy(() => {
  return import("./components/Navigation/Search");
});
const DetailedAnime = lazy(() => {
  return import("./components/DetailedAnime/DetailedAnime");
});
const Home = lazy(() => {
  return import("./components/Home/Home");
});
const CurrentlyAiring = lazy(() => {
  return import("./components/Navigation/CurrentlyAiring");
});
const TopRated = lazy(() => {
  return import("./components/Navigation/TopRated");
});
const Producer = lazy(() => {
  return import("./components/Navigation/Producer");
});
const Upcoming = lazy(() => {
  return import("./components/Navigation/Upcoming");
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
          <Route path="/producer/:name/:id" element={<Producer></Producer>} />
          <Route
            path="/producer/:name/:id/:page"
            element={<Producer></Producer>}
          ></Route>
          <Route path="/upcoming" element={<Upcoming />}></Route>
          <Route path="/upcoming/:page" element={<Upcoming />}></Route>
          <Route path="/genre/:name/:id/:page" element={<Genre />}></Route>
          <Route path="/genre/:name/:id" element={<Genre />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="" element={<Home />}></Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
