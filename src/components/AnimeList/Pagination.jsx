import { Link } from "react-router-dom";
import style from "./Pagination.module.css";
import generateRange from "../../utility/generateRange";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Pagination = ({ pagination, baseUrl }) => {
  const navigate = useNavigate();
  const pageGotoRef = useRef();
  const { current_page, last_visible_page } = pagination;
  const handleGoto = () => {
    const navigateTo = pageGotoRef.current.value;
    if (navigateTo !== "") {
      navigate(`${baseUrl}/${navigateTo}`);
    }
  };
  let paginationLinks = [];
  if (last_visible_page <= 5) {
    paginationLinks = generateRange(1, last_visible_page).map((value) => {
      return (
        <li key={value}>
          <Link
            className={value === current_page ? style["active"] : ""}
            to={`${baseUrl}/${value}`}
          >
            {value}
          </Link>
        </li>
      );
    });
  } else {
    const pagesToDisplay = [];
    if (current_page <= 2) {
      pagesToDisplay.push(...generateRange(1, 4), last_visible_page);
    } else if (current_page >= last_visible_page - 2) {
      pagesToDisplay.push(
        1,
        ...generateRange(last_visible_page - 3, last_visible_page - 1),
        last_visible_page
      );
    } else {
      pagesToDisplay.push(
        1,
        ...generateRange(current_page - 1, current_page + 1),
        last_visible_page
      );
    }
    paginationLinks = pagesToDisplay.map((value) => {
      return (
        <li key={value}>
          <Link
            className={value === current_page ? style["active"] : ""}
            to={`${baseUrl}/${value}`}
          >
            {value}
          </Link>
        </li>
      );
    });
  }
  return (
    <nav aria-label="pagination" className={style["nav-pagination"]}>
      <ul className={style["pagination"]}>
        {current_page != 1 && (
          <li className="navigation-control">
            <Link to={`${baseUrl}/${current_page - 1}`}>{`<`}</Link>
          </li>
        )}
        {paginationLinks}
        {current_page != last_visible_page && (
          <li className="navigation-control">
            <Link to={`${baseUrl}/${current_page + 1}`}>{`>`}</Link>
          </li>
        )}
      </ul>
      <div className={style["go-to"]}>
        <label htmlFor="page-goto">Go to</label>
        <div>
          <input
            max={last_visible_page}
            min={1}
            ref={pageGotoRef}
            type="number"
            id="page-goto"
            name="page-goto"
          />
          <button onClick={handleGoto}>{`>`}</button>
        </div>
      </div>
    </nav>
  );
};
export default Pagination;
