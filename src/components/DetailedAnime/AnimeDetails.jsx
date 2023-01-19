import style from "./AnimeDetails.module.css";
import AnimeStats from "./AnimeStats";
export default function DetailedAnime({ animeData }) {
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
    <section className="detailed-anime">
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
    </section>
  );
}
