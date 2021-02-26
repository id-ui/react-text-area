import React, { useCallback, useEffect, useState } from 'react';
import TextArea from './TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    value: { control: 'text', description: 'TextArea value' },
    onChange: { control: 'action', description: 'onChange value handler' },
    disabled: {
      control: 'boolean',
      description: 'whether TextArea disabled or not',
      defaultValue: false,
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    withError: {
      control: 'boolean',
      description: 'whether TextArea has error or not',
      defaultValue: false,
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    autoHeight: {
      control: 'boolean',
      description: 'whether fit TextArea height to content height or not',
      defaultValue: false,
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    colors: {
      control: 'object',
      description:
        'Textarea colors theme for different states (default, disabled, error, focused)',
      defaultValue: TextArea.defaultProps.colors,
      table: {
        defaultValue: {
          summary: JSON.stringify(TextArea.defaultProps.colors),
        },
      },
    },
    placeholder: { control: 'text', description: 'TextArea placeholder' },
    className: { control: 'text', description: 'TextArea className' },
    maxHeight: { control: 'text', description: 'max TextArea height' },
    rows: {
      control: 'number',
      description: 'TextArea rows count',
      defaultValue: 3,
      table: {
        defaultValue: {
          summary: 3,
        },
      },
    },
  },
};

export function Playground({ value: providedValue, onChange, ...props }) {
  const [value, setValue] = useState(providedValue);

  useEffect(() => {
    setValue(providedValue);
  }, [providedValue]);

  const handleChange = useCallback(
    (newValue) => {
      setValue(newValue);
      onChange(newValue);
    },
    [onChange]
  );

  return <TextArea {...props} value={value} onChange={handleChange} />;
}

Playground.args = {};
