import { Flex, Img } from '@chakra-ui/react';

export function Header(): JSX.Element {
  return (
    <Flex align="center" justify="center" p="6">
      <Img src="/assets/logo.svg" />
    </Flex>
  );
}
