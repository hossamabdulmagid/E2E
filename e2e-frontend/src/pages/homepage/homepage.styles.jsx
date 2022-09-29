import styled, {keyframes} from 'styled-components';
import {flipInX, zoomOutLeft} from 'react-animations';

const bounceAnimation = keyframes`${zoomOutLeft}`;
const FlipInX = keyframes`${flipInX}`;

export const RapperHomePageComponent = styled.section`
  min-height: 670px;
`;


export const BouncyDiv = styled.div`
  padding-top: 5px;
  animation: 3s ${bounceAnimation};

`;


export const BouncyFlip = styled.div`
  padding-top: 5px;
  animation: 3s ${FlipInX};
`;


