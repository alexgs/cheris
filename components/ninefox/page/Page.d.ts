import React from 'react';
import { ColorProps, MaxWidthProps, SpaceProps, WidthProps } from 'styled-system';
declare type PageProps = ColorProps & MaxWidthProps & SpaceProps & WidthProps;
declare const Page: React.FC<PageProps>;
export default Page;
