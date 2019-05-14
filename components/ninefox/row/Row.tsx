import component from '@rebass/components';
import React from 'react';
import { AlignItemsProps, ColorProps, DisplayProps, JustifyContentProps } from 'styled-system';

type RowProps = AlignItemsProps & ColorProps & DisplayProps & JustifyContentProps;
const defaults = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const Row:React.FC<RowProps> = component(
  defaults,
  'alignItems',
  'color',
  'display',
  'justifyContent',
);
Row.displayName = 'Row';

export default Row;
