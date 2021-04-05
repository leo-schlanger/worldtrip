import { Stack } from '@chakra-ui/react';

import { NavLink } from './NavLink';

export function Navigation(): JSX.Element {
  return (
    <Stack spacing="auto" align="flex-start" direction="row" w="100vw" p="24">
      <NavLink
        imgUrl="/assets/navigation/cocktail.svg"
        href="/dashboard"
        w="158px"
        h="145px"
      >
        vida noturna
      </NavLink>
      <NavLink imgUrl="/assets/navigation/surf.svg" href="/dashboard">
        praia
      </NavLink>
      <NavLink imgUrl="/assets/navigation/building.svg" href="/dashboard">
        moderno
      </NavLink>
      <NavLink imgUrl="/assets/navigation/museum.svg" href="/dashboard">
        clássico
      </NavLink>
      <NavLink imgUrl="/assets/navigation/earth.svg" href="/dashboard">
        e mais...
      </NavLink>
    </Stack>
  );
}
