import styled, { css } from 'styled-components';
import { FlexDiv, cubicBezier, warningLeft } from 'shared/styles';

export const Container = styled(FlexDiv)`
  width: ${({ width }) => (width ? width : '100%')};
  position: relative;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '1.8rem')};
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  box-sizing: border-box;
  height: 5rem;
  padding-left: ${(props) => (!props.center ? '1rem' : null)};
  font-size: 3rem;
  font-weight: 400;
  text-align: ${(props) => (props.center ? 'center' : null)};
  color: var(--darkgrey);
  word-wrap: break-word;
  border-width: 0;
  border-radius: 10rem;
  border-color: var(--darkgrey);
  outline: none;
  &::placeholder {
    font-weight: normal;
  }
  ${({ withDropdown }) =>
    withDropdown
      ? css`
          padding: 0 10rem;
        `
      : null}
`;

export const ErrorText = styled.p`
  position: absolute;
  padding: 1.2rem;
  margin-top: 3.2rem;
  margin-left: 2rem;
  font-size: 1.6rem;
  border-radius: 1rem 0 1rem 1rem;
  z-index: 99;
  animation: ${warningLeft} 0.2s ${cubicBezier} both;
  color: var(--darkgrey);
  background-color: var(--red);
  box-shadow: 0px 11px 10px -5px rgba(156, 156, 156, 1);
`;
