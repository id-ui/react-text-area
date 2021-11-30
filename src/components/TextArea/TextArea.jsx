import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useContentHeight from './hooks/useContentHeight';
import { Container } from './styled';
import { colors as defaultColors } from './theme';

function TextArea({
  value,
  autoHeight,
  disabled,
  withError,
  onChange,
  colors: providedColors,
  ...props
}) {
  const textAreaRef = useRef();

  useContentHeight({
    value,
    elementRef: textAreaRef,
    canResize: autoHeight,
  });

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const state = disabled ? 'disabled' : withError ? 'error' : 'default';

  const colors = {
    ...defaultColors,
    ...providedColors,
  };

  return (
    <Container
      autoHeight={autoHeight}
      value={value}
      disabled={disabled}
      ref={textAreaRef}
      onChange={handleChange}
      state={state}
      colors={colors}
      {...props}
    />
  );
}

const colorsSetShape = PropTypes.shape({
  color: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  outline: PropTypes.string,
  placeholder: PropTypes.string,
});

TextArea.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  withError: PropTypes.bool,
  autoHeight: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  rows: PropTypes.number,
  maxHeight: PropTypes.string,
  colors: PropTypes.shape({
    default: colorsSetShape,
    disabled: colorsSetShape,
    error: colorsSetShape,
  }),
};

TextArea.defaultProps = {
  disabled: false,
  withError: false,
  autoHeight: false,
  rows: 3,
  onChange: () => {},
  colors: defaultColors,
};

export default TextArea;
