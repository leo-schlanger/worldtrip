import {
  Text,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Img,
} from '@chakra-ui/react';

interface INavLinkProps extends ChakraLinkProps {
  imgUrl: string;
  children: string;
  href: string;
}

export function NavLink({
  children,
  imgUrl,
  href,
  ...rest
}: INavLinkProps): JSX.Element {
  return (
    <ChakraLink
      href={href}
      display="flex"
      align="center"
      flexDir="column"
      justifyContent="center"
      {...rest}
    >
      <Img src={imgUrl} w="85" h="85" alignSelf="center" />
      <Text ml="4" fontWeight="medium" align="center">
        {children}
      </Text>
    </ChakraLink>
  );
}
