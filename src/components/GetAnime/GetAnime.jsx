import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import AnimeList from "../AnimeList/AnimeList";
import Pagination from "../AnimeList/Pagination";
import style from "./GetAnime.module.css";
import EmptyResults from "./EmptyResults";
import { useParams } from "react-router-dom";
const GetAnime = ({ endPoint, sectionName, baseUrl }) => {
  let { page } = useParams();
  if (Object.is(NaN, Number(page))) {
    page = 1;
  }
  const url = `${endPoint}&order_by=score&sort=desc&limit=15&page=${page}`;
  const [response, isLoading, error, fetchRequest] = useFetch(url);
  useEffect(() => {
    fetchRequest();
  }, [page, baseUrl, sectionName]);
  const data = response && response.data;
  const pagination = response && response.pagination;
  return (
    <section className={style["results"]}>
      <h2 className={style["section-title"]}>{sectionName}</h2>
      {error && <div className="error-message">{error}</div>}
      {isLoading && <Loading></Loading>}
      {response && data.length == 0 && <EmptyResults></EmptyResults>}
      {response && data.length != 0 && <AnimeList data={data}></AnimeList>}
      {response && data.length != 0 && (
        <Pagination pagination={pagination} baseUrl={baseUrl}></Pagination>
      )}
    </section>
  );
};
export default GetAnime;
