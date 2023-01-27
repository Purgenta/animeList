import AnimeList from "../AnimeList/AnimeList";
import style from "./CharacterDetails.module.css";
export default function CharacterDetails({ animeData }) {
  const {
    anime: starringIn,
    images: { jpg, webp },
    name,
    about,
    name_kanji,
    nicknames,
  } = animeData;
  let nameSplit = name.split(" ");
  let nickname = [
    nameSplit[0],
    `"`,
    ...nicknames,
    `"`,
    nameSplit.slice(1),
  ].join(" ");
  const animeList = starringIn.map((value) => value["anime"]);
  return (
    <section className={style["detailed-character"]}>
      {!!nicknames.length && <h2 className={style["nicknames"]}>{nickname}</h2>}
      <div className="character-info">
        <div className={style["character-img__container"]}>
          <img
            src={webp?.["image_url"] || jpg?.["image_url"]}
            alt={`Profile of ${name}`}
          ></img>
          <h3
            className={style["character-name"]}
          >{`${name} - ${name_kanji}`}</h3>
        </div>
        <p className={style["description"]}>{about}</p>
      </div>
      <section className={style["featured-in"]}>
        <h2 className={style["featured-in"]}>Featured in</h2>
        <AnimeList data={animeList}></AnimeList>{" "}
      </section>
    </section>
  );
}
