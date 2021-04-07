import { Flex, Img, Text } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Flex
      as="div"
      align="center"
      justify="space-around"
      w="100vw"
      h={['150px', '250px', '335px']}
      backgroundImage="url('/assets/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      zIndex={1}
    >
      <Flex direction="column">
        <Text
          fontSize={['1rem', '1.5rem', '2.25rem']}
          fontWeight="bold"
          letterSpacing="tight"
          maxW="426px"
          color="#F5F8FA"
        >
          5 Continents,
          <br />
          infinity possibilities.
        </Text>
        <Text
          fontSize={['0.5rem', '0.75rem', '1.25rem']}
          mt="2"
          fontWeight="medium"
          letterSpacing="tight"
          maxW="524px"
          color="#F5F8FA"
        >
          The time has come to take the journey you&apos;ve always dreamed of
          out of paper.
        </Text>
      </Flex>
      <Img
        mt="12"
        src="/assets/airplane.svg"
        width={['100%', '100%', '100%', '40%', '']}
        display={['none', 'none', 'none', 'inline']}
      />
    </Flex>
  );
}
