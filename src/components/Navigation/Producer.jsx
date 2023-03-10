import { useParams } from "react-router-dom";
import GetAnime from "../GetAnime/GetAnime";
export default function Producer() {
  const { id, name } = useParams();
  return (
    <GetAnime
      endPoint={`anime?producers=${id}`}
      sectionName={`${name}`}
      baseUrl={`/producer/${name}/${id}`}
    ></GetAnime>
  );
}
