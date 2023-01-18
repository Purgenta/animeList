import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AnimeDetails from "./AnimeDetails";
import Loading from "../Loading/Loading";
export default function DetailedAnime(props) {
  const { id } = useParams();
  const [response, isLoading, error, fetchRequest] = useFetch(`anime/${id}`);
  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <>
      {isLoading && <Loading></Loading>}
      {error && <Navigate to={"/error"}></Navigate>}
      {response && <AnimeDetails animeData={response.data}></AnimeDetails>}
    </>
  );
}
