import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { axe } from 'jest-axe';
import TextArea from 'components/TextArea';

describe('TextArea', () => {
  it('accessible', async () => {
    const { container } = render(
      <div>
        <label htmlFor="text">text</label>
        <TextArea id="text" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('calls onChange with text value', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<TextArea onChange={onChange} withError />);

    const textArea = getByRole('textbox');
    user.type(textArea, 'value');

    expect(onChange).toHaveBeenCalledTimes(5);
    expect(onChange).toHaveBeenCalledWith('value');
  });

  it('does not call onChange if disabled', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<TextArea onChange={onChange} disabled />);

    const textArea = getByRole('textbox');
    user.type(textArea, 'value');

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('resizes if autoHeight and content height more than textbox height', () => {
    const { getByRole, rerender } = render(<TextArea autoHeight />);

    const textArea = getByRole('textbox');

    const initialTextAreaStyle = textArea.getAttribute('style');

    rerender(<TextArea autoHeight value={'value '.repeat(1000)} />);

    expect(textArea.getAttribute('style')).not.toBe(initialTextAreaStyle);
    expect(textArea.style).toHaveProperty('overflowY', '');
    expect(textArea.style).toHaveProperty('height');
  });

  it('does not resize if !autoHeight', () => {
    const { getByRole, rerender } = render(<TextArea />);

    const textArea = getByRole('textbox');

    const initialTextAreaStyle = textArea.getAttribute('style');

    rerender(<TextArea value={'value '.repeat(1000)} />);

    expect(textArea.getAttribute('style')).toBe(initialTextAreaStyle);
  });

  it('does not resize if content height less than textbox height', () => {
    const { getByRole, rerender } = render(<TextArea autoHeight />);

    const textArea = getByRole('textbox');

    rerender(<TextArea autoHeight value={'value '.repeat(1000)} />);

    const oldTextAreaStyle = textArea.getAttribute('style');

    rerender(<TextArea autoHeight value={'value '.repeat(500)} />);

    expect(textArea.getAttribute('style')).toBe(oldTextAreaStyle);
  });
});
