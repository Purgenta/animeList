import style from "./AnimeDetails.module.css";
import AnimeStats from "./AnimeStats";
import Characters from "./Character/Characters";
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
    aired: { from, to },
  } = animeData;
  return (
    <section className={style["detailed-anime"]}>
      <div className={style["primary-info"]}>
        <div className={style["hero-img__container"]}>
          <img
            src={image_url}
            className={style["hero-img"]}
            alt={`${title} cover`}
          ></img>
        </div>
        <AnimeStats
          score={score}
          members={members}
          rank={rank}
          popularity={popularity}
          studios={studios}
          scored_by={scored_by}
        ></AnimeStats>
      </div>
      <p className={style["synopsis"]}>{synopsis || "No synopsis provided"}</p>
      <Characters mal_id={mal_id}></Characters>
    </section>
  );
}
