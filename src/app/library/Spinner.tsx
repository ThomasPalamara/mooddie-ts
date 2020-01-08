import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles/theme';
import { SpinnerProps } from './types';

const Spinner: React.FunctionComponent<SpinnerProps> = ({
  size = 40,
  color = colors.gray[800],
}) => {
  const actualSize = '1em';
  //   const actualSize = typeof size === 'number' ? `${size}px` : size;
  const SpinnerWrapper = styled.div`
    width: ${actualSize};
    height: ${actualSize};
    border-radius: 100%;
    position: relative;
  `;

  const circle = ` content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc( ${actualSize} / 5) solid transparent;
  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }`;

  const Circle1 = styled.div`
    ${circle}
    border-top-color: ${color};
    animation: half-circle-spinner-animation 1s infinite;
  `;
  const Circle2 = styled.div`
    ${circle}
    border-bottom-color: ${color};
    animation: half-circle-spinner-animation 1s infinite alternate;
  `;

  return (
    <SpinnerWrapper>
      <Circle1 />
      <Circle2 />
    </SpinnerWrapper>
  );
};

export default Spinner;
