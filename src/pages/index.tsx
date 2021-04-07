import { Divider, Flex, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import continents from '../data/continents';

interface Continent {
  id: string;
  name: string;
  title: string;
  background: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps): JSX.Element {
  return (
    <Flex align="center" flexDir="column" w="100vw">
      <Header />
      <Banner />
      <Navigation />

      <Divider
        as="hr"
        w="90px"
        borderWidth="2px"
        borderColor="gray.500"
        bg="gray.500"
      />
      <Heading
        w="100%"
        textAlign="center"
        mt={['8', '16']}
        mb={['4', '8']}
        fontSize={['20px', '36px']}
        color="gray.600"
        fontWeight="500"
      >
        Here we go?
        <br />
        So choose your continent
      </Heading>

      <Carousel continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    continents: continents.map((continent) => ({
      id: continent.id,
      name: continent.name,
      title: continent.carouselTitle,
      background: continent.carouselBackground,
    })),
  },
});
