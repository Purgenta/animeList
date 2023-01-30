import CarouselCard from "../Carousel/CarouselCard";
const parseAnime = (data, Wrapper) => {
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
      <li key={mal_id}>
        <Wrapper key={mal_id}>
          <CarouselCard
            image_url={image_url}
            mal_id={mal_id}
            shouldDefer={3 <= index}
            key={mal_id}
            title={title}
            genres={genres}
          ></CarouselCard>
        </Wrapper>
      </li>
    );
  });
  return animeList;
};
export default parseAnime;
