import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import AnimeList from "../AnimeList/AnimeList";
import Pagination from "../AnimeList/Pagination";
import style from "./CurrentlyAiring.module.css";
import { useParams } from "react-router-dom";
const CurrentlyAiring = (props) => {
  let { page } = useParams();
  if (Object.is(NaN, Number(page))) {
    page = 1;
  }
  const url = `anime?status=airing&order_by=score&sort=desc&limit=15&page=${page}`;
  console.log(page, url);
  const [response, isLoading, error, fetchRequest] = useFetch(url);
  useEffect(() => {
    fetchRequest();
  }, [page]);
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
          baseUrl={"/currently-airing"}
        ></Pagination>
      )}
      <h1>{page}</h1>
    </section>
  );
};
export default CurrentlyAiring;
