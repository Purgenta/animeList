import { useParams } from "react-router-dom";
import GetAnime from "../GetAnime/GetAnime";
export default function Search() {
  let { searchName } = useParams();
  return (
    <GetAnime
      endPoint={`anime?q=${searchName}`}
      baseUrl={`/search/${searchName}`}
      sectionName={`Search results for: ${searchName}`}
    ></GetAnime>
  );
}
