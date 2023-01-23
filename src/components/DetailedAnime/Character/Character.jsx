import style from "./Character.module.css";
import { Link } from "react-router-dom";
export default function Character({ character, voice_actor, role }) {
  const {
    images: {
      webp: { image_url },
    },
    name,
    mal_id,
  } = character;
  const {
    person: {
      images: {
        jpg: { image_url: voice_img },
      },
      name: voiceName,
    },
    language,
  } = voice_actor;
  return (
    <div className={style["character"]}>
      <div className={style["wrapper"]}>
        <Link
          to={`/character/${mal_id}`}
          className={style["character-img__container"]}
        >
          <img
            src={image_url}
            className={style["hero-character"]}
            alt={`photo of ${name}`}
          ></img>
        </Link>
        <div>
          <h4 className={style["character-name"]}>{name}</h4>
          <h5 className={style["character-role"]}>{role}</h5>
        </div>
      </div>
      <div className={style["wrapper-voice"]}>
        <div>
          <h4 className={style["voice-name"]}>{voiceName}</h4>
          <h5 className={style["voice-language"]}>{language}</h5>
        </div>
        <div className={style["voice-img__container"]}>
          <img
            src={voice_img}
            className={style["hero-voice"]}
            alt={`Image of ${voiceName}`}
          ></img>
        </div>
      </div>
    </div>
  );
}
