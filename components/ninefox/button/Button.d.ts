import React from 'react';
import { BackgroundProps, BorderProps, BorderRadiusProps, ColorProps, SpaceProps } from 'styled-system';
declare type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & BackgroundProps & BorderProps & BorderRadiusProps & ColorProps & SpaceProps;
declare const Button: React.FC<ButtonProps>;
export default Button;
