import styled, {keyframes} from 'styled-components';
import {zoomOutLeft,hinge,flipInX   } from 'react-animations';

const bounceAnimation = keyframes`${zoomOutLeft}`;

export const BouncyDiv = styled.div`
  padding-top:50px;
  animation: 3s ${bounceAnimation};
`;



const FlipInX = keyframes`${flipInX}`;


export const BouncyFlip = styled.div`
  padding-top:70px;
  animation: 3s ${FlipInX};
`;