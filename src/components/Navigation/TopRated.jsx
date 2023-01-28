import GetAnime from "../GetAnime/GetAnime";
export default function TopRated(props) {
  return (
    <GetAnime
      endPoint={`anime?q=`}
      sectionName={"Top Rated"}
      baseUrl={`/top-rated`}
    ></GetAnime>
  );
}
