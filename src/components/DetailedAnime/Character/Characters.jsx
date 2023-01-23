import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Character from "./Character";
import style from "./Characters.module.css";
export default function Characters({ mal_id }) {
  const [response, , error, fetchRequest] = useFetch(
    `anime/${mal_id}/characters`
  );
  useEffect(() => {
    fetchRequest();
  }, []);
  const charactersDisplay = [];
  if (response) {
    response.data.forEach((value) => {
      const { character, voice_actors, role } = value;
      const { mal_id } = character;
      if (
        character?.name &&
        character?.images?.webp?.["image_url"] &&
        voice_actors.length > 0 &&
        charactersDisplay.length < 15
      ) {
        charactersDisplay.push(
          <li key={mal_id}>
            <Character
              role={role}
              voice_actor={voice_actors[voice_actors.length - 1]}
              character={character}
            ></Character>
          </li>
        );
      }
    });
  }
  const noCharacters = charactersDisplay.length;
  return (
    <section className={style["characters"]}>
      <h2>Characters & Voice Actors</h2>
      {response && !!noCharacters && (
        <ul className="characters-list">{charactersDisplay}</ul>
      )}
    </section>
  );
}
