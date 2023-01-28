import useFetch from "../../hooks/useFetch";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import parseAnime from "../AnimeList/parseAnime";
import { Navigation } from "swiper";
import CarouselList from "./CarouselList";
import { useEffect } from "react";
import "./AnimeCarousel.css";
export default function AnimeCarousel({ endpoint }) {
  const [response, error, loading, fetchData] = useFetch(`${endpoint}`);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      tag="ul"
      className={"anime-carousel"}
      direction="horizontal"
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        720: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1080: {
          spaceBetween: 20,
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1680: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        2000: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      }}
    >
      {response && parseAnime(response.data, SwiperSlide)}
    </Swiper>
  );
}
