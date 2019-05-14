import component from '@rebass/components';
import React from 'react';
import { ColorProps, SpaceProps } from 'styled-system';

import { Page } from './index';

type NavProps = ColorProps & SpaceProps;
const defaults = {
  as: 'nav',

  py: 'half',
};
const NavWrapper:React.FC<NavProps> = component(defaults, 'color', 'space');
NavWrapper.displayName = 'NavWrapper';

const Nav:React.FC<NavProps> = ({ children, ...props }) => {
  return (
    <NavWrapper {...props}>
      <Page>
        {children}
      </Page>
    </NavWrapper>
  );
};

export default Nav;
