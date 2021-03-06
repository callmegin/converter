import { css, keyframes } from 'styled-components';

export const cubicBezier = `cubic-bezier(0.7, 0, 0.3, 1)`;

export const transition = (property, duration) => css`
  transition: ${property} ${duration}ms ${cubicBezier} 0ms;
`;

export const warningLeft = keyframes`
  0% {
    transform: translateX(48px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateX(26px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(13px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateX(6.5px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateX(4px);
    animation-timing-function: ease-in;
  }
  25%, 55%, 75%, 87%, 98% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`;
