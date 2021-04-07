import { SimpleGrid } from '@chakra-ui/react';

import { NavLink } from './NavLink';

export function Navigation(): JSX.Element {
  return (
    <SimpleGrid
      spacing="auto"
      columns={[2, 2, 5]}
      gap={[4, 4, 0]}
      w="100vw"
      p="24"
    >
      <NavLink imgUrl="/assets/navigation/cocktail.svg">night life</NavLink>
      <NavLink imgUrl="/assets/navigation/surf.svg">beach</NavLink>
      <NavLink imgUrl="/assets/navigation/building.svg">modern</NavLink>
      <NavLink imgUrl="/assets/navigation/museum.svg">classic</NavLink>
      <NavLink imgUrl="/assets/navigation/earth.svg">and more...</NavLink>
    </SimpleGrid>
  );
}
