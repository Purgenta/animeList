import style from "./AnimeStats.module.css";
export default function AnimeStats({
  score,
  members,
  rank,
  popularity,
  studios,
  scored_by,
}) {
  let studioName = "No studio name";
  if (studios.length > 0 && studios[0]?.name) {
    studioName = studios[0].name;
  }
  return (
    <section className={style["stats"]}>
      <div className={style["score-information"]}>
        <h3>Score</h3>
        <h2 className={style["score"]}>{score || "No score"}</h2>
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
        <h4 className={style["studio-name"]}>Studio: {studioName}</h4>
      </div>
    </section>
  );
}
