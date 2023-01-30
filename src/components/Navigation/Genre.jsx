import { useParams } from "react-router-dom";
import GetAnime from "../GetAnime/GetAnime";
export default function Genre(props) {
  const { id, name } = useParams();
  return (
    <GetAnime
      endPoint={`anime?genres=${id}`}
      sectionName={`${name}`}
      baseUrl={`/genre/${name}/${id}`}
    ></GetAnime>
  );
}
