import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import AnimeList from "../AnimeList/AnimeList";
import Pagination from "../AnimeList/Pagination";
import style from "./CurrentlyAirring.module.css";

const currentlyAirring = (props) => {
	const params = new URLSearchParams(useLocation().search);
	const page = params.get("page") ?? 1;
	const url = `anime?status=airing&order_by=score&sort=desc&limit=15&page=${page}`;
	const [response, isLoading, error, fetchRequest] = useFetch(url);
	useEffect(() => {
		fetchRequest();
	}, [url]);
	const data = response && response.data;
	const pagination = response && response.pagination;
	return (
		<section className={style["currently-airing"]}>
			<h2 className={style["section-title"]}>Currently Airring</h2>
			{error && <div className="error-message">{error}</div>}
			{isLoading && <Loading></Loading>}
			{response && <AnimeList data={data}></AnimeList>}
			{response && (
				<Pagination
					pagination={pagination}
					url="/currently-airring"
					currentSearch
				></Pagination>
			)}
		</section>
	);
};
export default currentlyAirring;
