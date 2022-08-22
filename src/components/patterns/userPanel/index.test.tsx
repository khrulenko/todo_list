import '@testing-library/jest-dom';
import UserPanel from '.';
import { screen } from '@testing-library/react';
import { renderWithRedux } from '../../../common/utils';
import { mockedUser } from '../../../common/mocks';

describe('UserPanel', () => {
  test('should show plug text if there is no user', () => {
    renderWithRedux(<UserPanel />, { initialState: { user: null } });

    const plugText = screen.queryByTestId('plugtext');

    expect(plugText).toBeInTheDocument();
  });

  test('should show userPanel if user is loaded', () => {
    renderWithRedux(<UserPanel />, { initialState: { user: mockedUser } });

    const userPanel = screen.getByTestId('userpanel');

    expect(userPanel).toBeInTheDocument();
  });
});
