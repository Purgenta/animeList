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
      rating,
    } = anime;
    return (
      <AnimeItem
        image_url={image_url}
        shouldDefer={9 <= index}
        key={mal_id}
        title={title}
        rating={rating}
      ></AnimeItem>
    );
  });
  return <ul className={style["search-results"]}>{animeList}</ul>;
};
export default AnimeList;
