import { Link } from "react-router-dom";
import style from "./Pagination.module.css";
const Pagination = ({ pagination, baseUrl }) => {
  const { current_page, last_visible_page } = pagination;
  let paginationLinks = [];
  if (last_visible_page <= 5) {
    for (let i = 1; i <= last_visible_page; i++) {
      paginationLinks.push(
        <li key={i}>
          <Link>i</Link>
        </li>
      );
    }
  } else {
    const pagesToDisplay = [];
    if (current_page <= 2) {
      pagesToDisplay.push(1, 2, 3, 4, last_visible_page);
    } else if (current_page <= last_visible_page - 2) {
      pagesToDisplay.push(
        last_visible_page,
        last_visible_page - 1,
        last_visible_page - 2,
        last_visible_page - 3,
        1
      );
    } else {
      pagesToDisplay.push(
        1,
        current_page - 1,
        current_page,
        current_page + 1,
        last_visible_page
      );
    }
    paginationLinks = pagesToDisplay.map((value) => {
      return (
        <li key={value}>
          <Link>{value}</Link>
        </li>
      );
    });
  }
  return (
    <nav aria-label="pagination" className="nav-pagination">
      <ul className={style["pagination"]}>
        {current_page != 1 && (
          <li className="navigation-control">
            <Link>{`<<`}</Link>
          </li>
        )}
        {paginationLinks}
        {current_page != last_visible_page && (
          <li className="navigation-control">
            <Link>{`>>`}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;
