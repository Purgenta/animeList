import AnimeItem from "../AnimeList/AnimeItem";
import { SwiperSlide } from "swiper/react";
export default function CarouselList({ data }) {
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
      <SwiperSlide key={mal_id}>
        <AnimeItem
          image_url={image_url}
          mal_id={mal_id}
          shouldDefer={3 <= index}
          title={title}
          genres={genres}
        ></AnimeItem>
      </SwiperSlide>
    );
  });
  return animeList;
}
