import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from './common/utils';

const mockedTodos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
];

describe('App', () => {
  test('should include "load todos" button', () => {
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
