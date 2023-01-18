import style from "./AnimeDetails.module.css";
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
          <img src={image_url} alt={`${title} cover`}></img>
        </div>
        <section className={style["stats"]}>
          <div className={style["score-information"]}>
            <h3>Score</h3>
            <h2 className={style["score"]}>{score || "No score yet"}</h2>
            {score && (
              <p className={style["scored_by"]}>
                {scored_by} <span>users</span>
              </p>
            )}
          </div>
          <div className="wrapper">
            <ul className={style["rankings"]}>
              <li>
                <h3 className="stat">
                  Ranked: <span>#{rank}</span>
                </h3>
              </li>
              <li>
                <h3 className="stat">
                  Popularity: <span>#{popularity}</span>
                </h3>
              </li>
              <li>
                <h3 className="stat">Members: {members}</h3>
              </li>
            </ul>
            <h4 className={style["studio-name"]}>
              Studio: {studios[0]["name"]} {}
            </h4>
          </div>
        </section>
      </div>
    </section>
  );
}
