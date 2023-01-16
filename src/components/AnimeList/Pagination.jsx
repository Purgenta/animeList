import { Link } from "react-router-dom";
import style from "./Pagination.module.css";
const Pagination = ({ pagination }) => {
  const { items, current_page, last_visible_page } = pagination;
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
    paginationLinks.push(
      <li key={1}>
        <Link>1</Link>
      </li>
    );
    paginationLinks.push(
      <li key={last_visible_page}>
        <Link>{last_visible_page}</Link>
      </li>
    );
  }

  return (
    <nav aria-label="pagination" className="nav-pagination">
      <ul className={style["pagination"]}>{paginationLinks}</ul>
    </nav>
  );
};
export default Pagination;
