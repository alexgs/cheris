import React from 'react';
import { ColorProps, SpaceProps } from 'styled-system';
declare type NavProps = ColorProps & SpaceProps;
declare const Nav: React.FC<NavProps>;
export default Nav;
