import React from 'react';
import { AlignItemsProps, ColorProps, DisplayProps, JustifyContentProps } from 'styled-system';
declare type RowProps = AlignItemsProps & ColorProps & DisplayProps & JustifyContentProps;
declare const Row: React.FC<RowProps>;
export default Row;
