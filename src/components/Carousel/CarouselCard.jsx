import style from "./CarouselCard.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
export default function CarouselCard({
  mal_id,
  image_url,
  title,
  shouldDefer,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverHandler = () => {
    setIsHovered((prev) => {
      return !prev;
    });
  };
  return (
    <div
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      className={style["anime-item"]}
    >
      <div className={style["wrapper"]}>
        <Link
          to={`/anime/${mal_id}`}
          className={style["anime-image__container"]}
        >
          <img
            alt={`${title} cover`}
            loading={shouldDefer ? "lazy" : "eager"}
            src={`${image_url}`}
          ></img>
        </Link>
        <motion.h3
          animate={{
            y: isHovered ? 0 : "100%",
          }}
          className={style["anime-item__title"]}
        >
          {title}
        </motion.h3>
      </div>
    </div>
  );
}
