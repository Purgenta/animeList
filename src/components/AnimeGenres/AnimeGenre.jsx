import style from "./AnimeGenre.module.css";
export default function AnimeGenre({ genres }) {
  const genresList =
    genres?.length &&
    genres.map((genre) => {
      const { mal_id, name } = genre;
      return (
        <li key={`${name}${mal_id}`} className={style["genre"]}>
          {name}
        </li>
      );
    });
  return <ul className={style["genres"]}>{genresList}</ul>;
}
