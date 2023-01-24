import style from "./Home.module.css";
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
    </section>
  );
}
