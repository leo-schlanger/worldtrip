import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ContentContainerProps extends FlexProps {
  children: ReactNode;
}

const ContentContainer = ({
  children,
  ...rest
}: ContentContainerProps): JSX.Element => (
  <Flex w="90%" maxWidth="1240px" align="center" {...rest}>
    {children}
  </Flex>
);

export default ContentContainer;
