import AnimeItem from "./AnimeItem";
import style from "./AnimeList.module.css";
const AnimeList = ({ data }) => {
  const animeList = data.map((anime, index) => {
    const {
      mal_id,
      images: {
        webp: { image_url },
      },
      title,
      genres,
    } = anime;
    return (
      <li key={mal_id}>
        <AnimeItem
          image_url={image_url}
          mal_id={mal_id}
          shouldDefer={3 <= index}
          title={title}
          genres={genres}
        ></AnimeItem>
      </li>
    );
  });
  return <ul className={style["search-results"]}>{animeList}</ul>;
};
export default AnimeList;
