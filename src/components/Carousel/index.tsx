import { Flex } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CarouselItem from './CarouselItem';

SwiperCore.use([Navigation, Pagination]);

export function Carousel(): JSX.Element {
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
        <SwiperSlide>
          <CarouselItem
            title="Europa"
            // description="O continente mais antigo"
            background="/images/europe.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            title="África"
            // description=""
            background="/images/africa.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            title="Américas"
            // description=""
            background="/images/americas.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            title="Asia"
            // description=""
            background="/images/asia.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            title="Oceania"
            // description=""
            background="/images/oceania.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
