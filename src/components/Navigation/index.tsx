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
      <NavLink imgUrl="/assets/navigation/cocktail.svg">vida noturna</NavLink>
      <NavLink imgUrl="/assets/navigation/surf.svg">praia</NavLink>
      <NavLink imgUrl="/assets/navigation/building.svg">moderno</NavLink>
      <NavLink imgUrl="/assets/navigation/museum.svg">clássico</NavLink>
      <NavLink imgUrl="/assets/navigation/earth.svg">e mais...</NavLink>
    </SimpleGrid>
  );
}
