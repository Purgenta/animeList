import style from "./Character.module.css";
export default function Character({ character, voice_actor }) {
  const {
    images: {
      webp: { image_url },
    },
    name,
  } = character;
  const {
    person: {
      images: {
        jpg: { image_url: voice_img },
      },
      name: voiceName,
    },
  } = voice_actor;
  return (
    <div className={style["character"]}>
      <div className={style["wrapper"]}>
        <div className={style["character-img__container"]}>
          <img
            src={image_url}
            className={style["hero-character"]}
            alt={`photo of ${name}`}
          ></img>
        </div>
        <h4 className={style["character-name"]}>{name}</h4>
      </div>
      <div className={style["wrapper-voice"]}>
        <h4 className={style["voice-name"]}>{voiceName}</h4>
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
