import styled, { css } from 'styled-components';
import { ifProp, prop, withProp } from 'styled-tools';

export const Container = styled.textarea`
  padding: 1rem 1.6rem;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  border-style: solid;
  outline: none;
  resize: ${ifProp('autoHeight', 'none', 'vertical')};
  max-height: ${prop('maxHeight', 'none')};
  ${withProp(
    ['state', 'colors'],
    (state, colors) => css`
      color: ${colors[state].color};
      border-color: ${colors[state].border};
      background-color: ${colors[state].background};
    `
  )}
  ${(ifProp({ state: 'default' }),
  css`
    &:focus-within {
      border-color: ${prop('colors.focused.border')};
    }
  `)}
`;
