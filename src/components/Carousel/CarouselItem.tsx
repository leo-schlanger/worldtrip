import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface ICarouselItemProps {
  title: string;
  // description: string;
  background: string;
}

export default function CarouselItem({
  title,
  // description,
  background,
}: ICarouselItemProps): JSX.Element {
  return (
    <Link href="/">
      <Flex
        backgroundImage={`url(${background})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        cursor="pointer"
        w="100%"
        h={['250px', '450px']}
      >
        <Flex justifyContent="center" alignItems="center" w="100%">
          <Text fontWeight="600" fontSize={['24px', '48px']} color="white">
            {title}
          </Text>
          {/* <Text fontWeight="500" fontSize={['14px', '24px']} color="white">
            {description}
          </Text> */}
        </Flex>
      </Flex>
    </Link>
  );
}
