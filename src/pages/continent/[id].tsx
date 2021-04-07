/* eslint-disable linebreak-style *//* eslint-disable prettier/prettier */
import { Flex } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';

import Banner from '../../components/Continent/Banner';
import Cities from '../../components/Continent/Cities';
import Detail from '../../components/Continent/Description';
import { Header } from '../../components/Header';
import continents from '../../data/continents';

interface City {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}

interface ContinentProps {
  continent: {
    id: string;
    name: string;
    carouselTitle: string;
    carouselBackground: string;
    bannerImage: string;
    about: string;
    countries: number;
    languages: number;
    cities100: number;
    cities: City[];
  };
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  return (
    <>
      <Flex width="100%" flexDir="column" bg="gray.50" align="center">
        <Header />
        <Banner name={continent.name} image={continent.bannerImage} />
        <Detail
          about={continent.about}
          countries={continent.countries}
          languages={continent.languages}
          cities100={continent.cities100}
        />
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <Cities cities={continent.cities} onClickCard={() => {}} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: continents.map((continent) => ({
    params: {
      id: continent.id,
    },
  })),
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  return {
    props: {
      continent: continents.find((continent) => continent.id === id),
    },
  };
};
