import { useParams } from "react-router-dom";
import GetAnime from "../GetAnime/GetAnime";

export default function Producer() {
  const { id } = useParams();
  return (
    <GetAnime
      endPoint={`anime?producers=${id}`}
      sectionName={"Producer releases: "}
      baseUrl={`/producer/${id}`}
    ></GetAnime>
  );
}
