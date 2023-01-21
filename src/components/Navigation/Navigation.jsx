import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import style from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
export default function Navigation(props) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const searchRef = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setNavIsOpen(false);
  }, [pathname]);
  const searchFormHandler = (event) => {
    event.preventDefault();
    const searchParam = searchRef.current.value;
    if (searchParam.length) navigate(`/search/${searchParam}`);
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={style["main-nav"]}
    >
      <ul
        className={`${style["main-nav__links"]} ${
          style[navIsOpen ? "active" : ""]
        }`}
      >
        <FontAwesomeIcon
          className={style["nav-close"]}
          icon={faXmark}
          onClick={() => {
            setNavIsOpen(false);
          }}
          size={"2x"}
        ></FontAwesomeIcon>
        <li className="main-nav__link">
          <NavLink className={style["nav-link"]} to={"/home"}>
            Home
          </NavLink>
        </li>
        <li className="main-nav__link">
          <NavLink className={style["nav-link"]} to={"/search"}>
            Search
          </NavLink>
        </li>
        <li className="main-nav__link">
          <NavLink className={style["nav-link"]} to={"/top-rated/1"}>
            Top Rated
          </NavLink>
        </li>
        <li className="main-nav__link">
          <NavLink className={style["nav-link"]} to={"/currently-airing/1"}>
            Currently Airring
          </NavLink>
        </li>
      </ul>
      <div className={style["search-bar__wrapper"]}>
        <form onSubmit={searchFormHandler} className={style["search-bar"]}>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search anime"
            id="search"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </form>
      </div>
      <div className={style["hamburger-menu"]}>
        <FontAwesomeIcon
          onClick={() => {
            setNavIsOpen(true);
          }}
          icon={faBars}
          size={"xl"}
        ></FontAwesomeIcon>
      </div>
    </motion.nav>
  );
}
