import { Link } from "react-router-dom";
import style from "./Pagination.module.css";
import generateRange from "../../utility/generateRange";
const Pagination = ({ pagination, baseUrl }) => {
  const { current_page, last_visible_page } = pagination;
  let paginationLinks = [];
  if (last_visible_page <= 5) {
    paginationLinks = generateRange(1, last_visible_page).map((value) => {
      return (
        <li key={value}>
          <Link to={`${baseUrl}/${value}`}>i</Link>
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
            className={value === current_page ? "active" : ""}
            to={`${baseUrl}/${value}`}
          >
            {value}
          </Link>
        </li>
      );
    });
  }
  return (
    <nav aria-label="pagination" className="nav-pagination">
      <ul className={style["pagination"]}>
        {current_page != 1 && (
          <li className="navigation-control">
            <Link to={`${baseUrl}/${current_page - 1}`}>{`<<`}</Link>
          </li>
        )}
        {paginationLinks}
        {current_page != last_visible_page && (
          <li className="navigation-control">
            <Link to={`${baseUrl}/${current_page + 1}`}>{`>>`}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;
