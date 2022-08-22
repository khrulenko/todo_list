import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import ErrorAlert from '.';
import { renderWithRedux } from '../../../common/utils';

describe('ErrorAlert', () => {
  test('should appear if there is an error', () => {
    renderWithRedux(<ErrorAlert error="Error loading a user 1" />);

    const errorAlert = screen.getByText('Error loading a user 1');

    expect(errorAlert).toBeInTheDocument();
  });
});
