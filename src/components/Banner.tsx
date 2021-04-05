import { Flex, Img, Text } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Flex
      as="div"
      align="center"
      justify="space-around"
      w="100vw"
      h="225"
      backgroundImage="url('/assets/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex direction="column">
        <Text
          fontSize={['2xl', '3xl']}
          fontWeight="bold"
          letterSpacing="tight"
          w="426px"
          color="#F5F8FA"
        >
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text
          fontSize={['m', 'm']}
          mt="2"
          fontWeight="400"
          letterSpacing="tight"
          w="524px"
          color="#F5F8FA"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      <Img mt="12" src="/assets/airplane.svg" />
    </Flex>
  );
}
