import { Text, Img, useBreakpointValue, Icon, Flex } from '@chakra-ui/react';

interface INavLinkProps {
  imgUrl: string;
  children: string;
}

export function NavLink({ children, imgUrl }: INavLinkProps): JSX.Element {
  const isMobileVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
  });

  return (
    <Flex
      as="div"
      display="flex"
      flexDir={isMobileVersion ? 'row' : 'column'}
      alignItems="center"
      justifyContent="flex-start"
      mt={['1rem', '1rem', '0']}
    >
      {!isMobileVersion ? (
        <Img src={imgUrl} w="85" h="85" alignSelf="center" />
      ) : (
        <Icon viewBox="0 0 200 200" color="yellow.500">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
      )}

      <Text
        fontWeight="semibold"
        fontSize={['1rem', '1.1rem', '1.5rem']}
        ml={['1rem', '1rem', '0']}
      >
        {children}
      </Text>
    </Flex>
  );
}
