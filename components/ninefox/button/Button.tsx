import component from '@rebass/components';
import React from 'react';
import {
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  ColorProps,
  SpaceProps,
} from 'styled-system';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & BackgroundProps & BorderProps
  & BorderRadiusProps & ColorProps & SpaceProps;
const defaults = {
  as: 'button',

  background: 'transparent',
  borderRadius: 3,
  border: '2px solid lightgray',
  color: 'inherit', // TODO Prevent "color" attribute from getting added to HTML button element
  m: 0,
  p: '0.25em 1em',
};
const Button:React.FC<ButtonProps> = component(
  defaults,
  'background',
  'border',
  'borderRadius',
  'color',
  'space',
);
Button.displayName = 'Button';

export default Button;
