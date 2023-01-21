import style from "./EmptyResults.module.css";
import noResults from "../../assets/no-results-found.png";
export default function EmptyResults(props) {
  return (
    <div className={style["empty-results"]}>
      <h2 className="empty-message">No results matched your criteria</h2>
      <div className={style["empty-img__wrapper"]}>
        <img
          className={style["empty-img"]}
          src={noResults}
          alt="shrug no results"
        />
      </div>
    </div>
  );
}
