import style from "./Home.module.css";
import AnimeCarousel from "../../Carousel/AnimeCarousel";
export default function Home(props) {
  return (
    <section className={style["home"]}>
      <section className={style["featured-anime"]}>
        <div className={style["welcome-information"]}>
          <h1 className={style["welcome-message"]}>Welcome to AnimeShow</h1>
          <p className={style["website-information"]}>
            Thousands of anime and related content. Explore now!
            <br />
            Developed by Nikola Todorovic and powered by JikanApi
          </p>
        </div>
      </section>
      <div className={style["wrapper"]}>
        <h2>Top Rated</h2>
        <AnimeCarousel
          endpoint={`anime?q=&order_by=score&sort=desc&limit=15`}
        />
      </div>
      <div className={style["wrapper"]}>
        <h2>Currently Airing</h2>
        <AnimeCarousel
          endpoint={`anime?q=&status=airing&order_by=score&sort=desc&limit=15`}
        />
      </div>
    </section>
  );
}
