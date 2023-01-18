import style from "./AnimeItem.module.css";
import { Link } from "react-router-dom";
export default function AnimeItem({ mal_id, image_url, title, shouldDefer }) {
  return (
    <li className={style["anime-item"]}>
      <Link to={`/anime/${mal_id}`} className={style["anime-image__container"]}>
        <img
          alt={`${title} cover`}
          loading={shouldDefer ? "lazy" : "eager"}
          src={`${image_url}`}
        ></img>
      </Link>
      <h3 className={style["anime-item__title"]}>{title}</h3>
    </li>
  );
}
