import { Flex } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';

export default function Home(): JSX.Element {
  return (
    <Flex align="center" direction="column" w="100vw">
      <Header />
      <Banner />
      <Navigation />
    </Flex>
  );
}
