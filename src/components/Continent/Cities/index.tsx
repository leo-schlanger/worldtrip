/* eslint-disable no-unused-vars */
import { Heading, Wrap } from '@chakra-ui/react';

import ContentContainer from '../../ContentContainer';
import CityCard from './CityCard';

interface City {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}

interface ModalInfo {
  city: string;
  query: string;
}

interface ContinentCitiesProps {
  cities: City[];
  onClickCard: (data: ModalInfo) => void;
}

const ContinentCities = ({
  cities,
  onClickCard,
}: ContinentCitiesProps): JSX.Element => (
  <ContentContainer mt="4rem" flexDir="column" align="flex-start" mb="4rem">
    <Heading>Cidades +100</Heading>
    <Wrap
      mt="2rem"
      spacing="3rem"
      justify={['center', 'center', 'center', 'flex-start']}
    >
      {cities.map((city) => (
        <CityCard
          key={city.id}
          imageSrc={city.image}
          city={city.name}
          id={city.id}
          country={city.country}
          flagCode={city.code}
          onClickCard={onClickCard}
        />
      ))}
    </Wrap>
  </ContentContainer>
);

export default ContinentCities;
