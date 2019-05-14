import React from 'react';
import styled from 'styled-components';
import { ColorProps, color } from 'styled-system';

type CardProps = ColorProps;
const Card = styled('div')<CardProps>`
  ${color}
`;
Card.displayName = 'Card';

export default Card;

/*********************************************************/
// Alternate syntax for a component that has no defaults //

// import component from '@rebass/components';
// import React from 'react';
// import { ColorProps } from 'styled-system';
//
// type CardProps = ColorProps;
// const defaults = {};
// const Card:React.FC<CardProps> = component(defaults, 'color');
// Card.displayName = 'Card';
//
// export default Card;
