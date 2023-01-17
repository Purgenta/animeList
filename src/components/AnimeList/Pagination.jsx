import { Link } from "react-router-dom";
import style from "./Pagination.module.css";
const Pagination = ({ pagination, url }) => {
	const { items, current_page, last_visible_page } = pagination;

	let paginationLinks = [];

	function addLink(page) {
		const className = page === current_page ? style["current"] : "";
		paginationLinks.push(
			<li key={page}>
				<Link to={`${url}?page=${page}`} className={className}>
					{page}
				</Link>
			</li>,
		);
	}

	// sliding window?
	const pad = 2;
	let [beg, end] = [2, 2 + pad + pad];
	for (let i = beg; i + pad + pad < last_visible_page - 1; ++i) {
		console.log(beg, i, end);
		if (current_page <= beg + pad) break;
		++beg;
		++end;
	}

	addLink(1);
	/* beg separator */ paginationLinks.push(<span key="sepl">...</span>);
	for (let i = beg; i <= end; i++) {
		addLink(i);
	}
	/* end separator */ paginationLinks.push(<span key="sepr">...</span>);
	addLink(last_visible_page);

	return (
		<nav aria-label="pagination" className="nav-pagination">
			<ul className={style["pagination"]}>{paginationLinks}</ul>
		</nav>
	);
};
export default Pagination;
