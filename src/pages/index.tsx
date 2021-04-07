import { Divider, Flex, Heading } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';

export default function Home(): JSX.Element {
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
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Carousel />
    </Flex>
  );
}
