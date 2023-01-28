import GetAnime from "../GetAnime/GetAnime";
export default function Upcoming() {
  return (
    <GetAnime
      endPoint={`anime?status=upcoming`}
      sectionName={"Upcoming"}
      baseUrl={`/upcoming`}
    ></GetAnime>
  );
}
