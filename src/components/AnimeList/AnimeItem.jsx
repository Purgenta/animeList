import style from "./AnimeItem.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimeGenre from "../AnimeGenres/AnimeGenre";
export default function AnimeItem({
  mal_id,
  image_url,
  title,
  shouldDefer,
  genres,
}) {
  return (
    <motion.li
      whileHover={{ backgroundColor: "#2c3636" }}
      className={style["anime-item"]}
    >
      <Link to={`/anime/${mal_id}`} className={style["anime-image__container"]}>
        <img
          alt={`${title} cover`}
          loading={shouldDefer ? "lazy" : "eager"}
          src={`${image_url}`}
        ></img>
      </Link>
      <AnimeGenre genres={genres}></AnimeGenre>
      <h3 className={style["anime-item__title"]}>{title}</h3>
    </motion.li>
  );
}
