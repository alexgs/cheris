import component from '@rebass/components';
import React from 'react';
import { ColorProps, MaxWidthProps, SpaceProps, WidthProps } from 'styled-system';

type PageProps = ColorProps & MaxWidthProps & SpaceProps & WidthProps;
const defaults = {
  mx: 'auto',
  my: 0,
  p: 0,
  width: '100%',
  maxWidth: {
    md: 720,
    lg: 1140,
  },
};
const Page:React.FC<PageProps> = component(defaults, 'color', 'maxWidth', 'space', 'width');
Page.displayName = 'Page';

export default Page;
