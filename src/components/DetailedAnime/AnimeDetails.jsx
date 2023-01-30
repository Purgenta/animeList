import style from "./AnimeDetails.module.css";
import AnimeStats from "./AnimeStats";
import Characters from "./Character/Characters";
import routeAnimation from "../../animation/routeAnimation";
import { motion } from "framer-motion";
import AnimeGenre from "../AnimeGenres/AnimeGenre";
export default function DetailedAnime({ animeData, mal_id }) {
  const {
    images: {
      webp: { image_url },
    },
    title,
    score,
    members,
    rank,
    popularity,
    studios,
    synopsis,
    scored_by,
    genres,
    trailer: { embed_url },
  } = animeData;
  return (
    <motion.section
      variants={routeAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={style["detailed-anime"]}
    >
      <div className={style["primary-info"]}>
        <div className={style["hero-img__container"]}>
          <img
            src={image_url}
            className={style["hero-img"]}
            alt={`${title} cover`}
          ></img>
          <AnimeGenre genres={genres} />
        </div>
        <div className={style["title"]}>
          <h2>{title}</h2>
        </div>
        <AnimeStats
          score={score}
          members={members}
          rank={rank}
          popularity={popularity}
          studios={studios}
          scored_by={scored_by}
        ></AnimeStats>
        <p className={style["synopsis"]}>
          {synopsis || "No synopsis provided"}
        </p>
      </div>
      {embed_url && (
        <div className={style["trailer"]}>
          <iframe
            id="ytplayer"
            type="text/html"
            src={embed_url}
            title={`${title} trailer`}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      )}
      <Characters mal_id={mal_id}></Characters>
    </motion.section>
  );
}
