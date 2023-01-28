import GetAnime from "../GetAnime/GetAnime";
export default function CurrentlyAiring() {
  return (
    <GetAnime
      endPoint={"anime?status=airing"}
      sectionName={"Currently Airing"}
      baseUrl={`/currently-airing`}
    ></GetAnime>
  );
}
