import { Flex } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CarouselItem from './CarouselItem';

SwiperCore.use([Navigation, Pagination]);

interface IContinent {
  id: string;
  name: string;
  title: string;
  background: string;
}

interface ICarouselProps {
  continents: IContinent[];
}

export function Carousel({ continents }: ICarouselProps): JSX.Element {
  return (
    <Flex w="90%" justifyContent="center" alignItems="center" mb="8">
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay
        initialSlide={0}
      >
        {continents.map((continent) => (
          <SwiperSlide key={`slide-${continent.id}`}>
            <CarouselItem
              id={continent.id}
              name={continent.name}
              title={continent.title}
              background={continent.background}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
