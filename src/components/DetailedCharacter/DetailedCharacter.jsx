import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import CharacterDetails from "./CharacterDetails";
import style from "./DetailedCharacter.module.css";
export default function DetailedCharacter(props) {
  const { id } = useParams();
  const [response, isLoading, error, fetchCharacterData] = useFetch(
    `characters/${id}/full`
  );
  useEffect(() => {
    fetchCharacterData();
  }, []);
  return (
    <>
      {isLoading && <Loading></Loading>}
      {error && <Navigate to={"/error"}></Navigate>}
      {response && (
        <section className={style["character"]}>
          <CharacterDetails
            mal_id={id}
            animeData={response.data}
          ></CharacterDetails>
        </section>
      )}
    </>
  );
}
