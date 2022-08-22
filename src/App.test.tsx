import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import App from './App';
import { mockedTodos } from './common/mocks';
import { renderWithRedux } from './common/utils';

describe('App', () => {
  test('should show "load todos" button', () => {
    renderWithRedux(<App />);
    const loadButton = screen.getByText(/load todos/i);

    expect(loadButton).toBeInTheDocument();
  });

  test('when todos are loaded "load todos" button dissapears and "refresh" button appers', () => {
    renderWithRedux(<App />, { initialState: { todos: mockedTodos } });

    expect(screen.queryByText(/load todos/i)).not.toBeInTheDocument();
    expect(screen.getByText(/refresh/i)).toBeInTheDocument();
  });
});
