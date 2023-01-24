import style from "./AnimeStats.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export default function AnimeStats({
  score,
  members,
  rank,
  popularity,
  studios,
  scored_by,
}) {
  let studioName = "No studio name";
  let studioId;
  if (studios.length > 0 && studios[0]?.name) {
    studioName = studios[0].name;
    studioId = studios[0]["mal_id"];
  }
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="visible"
      className={style["stats"]}
    >
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
        <Link to={`/producer/${studioId}`} className={style["studio-name"]}>
          Studio: {studioName}
        </Link>
      </div>
    </motion.section>
  );
}
