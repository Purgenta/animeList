import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
export default function Navigation(props) {
  return (
    <nav className={style["main-nav"]}>
      <ul className={style["main-nav__links"]}>
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
          <NavLink className={style["nav-link"]} to={"/top-rated"}>
            Top Rated
          </NavLink>
        </li>
        <li className="main-nav__link">
          <NavLink className={style["nav-link"]} to={"/currently-airring"}>
            Currently Airring
          </NavLink>
        </li>
      </ul>
      <div className={style["search-bar__wrapper"]}>
        <div className={style["search-bar"]}>
          <input type="text" placeholder="Search anime" id="search" />
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </div>
      </div>
      <div className={style["hamburger-menu"]}>
        <FontAwesomeIcon icon={faBars} size={"xl"}></FontAwesomeIcon>
      </div>
    </nav>
  );
}
