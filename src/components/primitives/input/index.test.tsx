import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '.';

describe('Input', () => {
  test('should clear input value after click on clear button', () => {
    const change = jest.fn();

    render(<Input value={'hello'} onChange={change} />);
    const clearButton = screen.getByTestId('clearButton');

    fireEvent.click(clearButton);

    expect(change).toBeCalledWith('');
  });
});
