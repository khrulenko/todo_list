import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from '../../../common/utils';
import TodoItem from '.';
import { loadUser } from '../../../common/api';
import { mockedLoading, mockedTodo, mockedUser } from '../../../common/mocks';

jest.mock('../../../common/api');

describe('TodoItem', () => {
  const getUserButton = () => screen.getByText(/^user/i);

  test('should disable "user #" button if todo.userId === user.id', () => {
    renderWithRedux(<TodoItem todo={mockedTodo} index={1} />, {
      initialState: { user: mockedUser, loading: mockedLoading },
    });

    expect(getUserButton()).toBeDisabled();
  });

  test('should disable "user #" button if user is being loaded', () => {
    renderWithRedux(<TodoItem todo={mockedTodo} index={1} />, {
      initialState: {
        user: mockedUser,
        loading: { ...mockedLoading, isLoadingUser: true },
      },
    });

    expect(getUserButton()).toBeDisabled();
  });

  test('"user #" button is active if todo.userId != user.id', () => {
    renderWithRedux(<TodoItem todo={mockedTodo} index={1} />, {
      initialState: { user: { ...mockedUser, id: 2 }, loading: mockedLoading },
    });

    expect(getUserButton()).not.toBeDisabled();
  });

  test(`disabled "user #" button shouldn't load user on click`, () => {
    renderWithRedux(<TodoItem todo={mockedTodo} index={1} />, {
      initialState: { user: mockedUser, loading: mockedLoading },
    });

    userEvent.click(getUserButton());

    expect(loadUser).not.toHaveBeenCalled();
  });

  test('active "user #" button should load user on click', () => {
    renderWithRedux(
      <TodoItem todo={{ ...mockedTodo, userId: 2 }} index={1} />,
      {
        initialState: { user: mockedUser, loading: mockedLoading },
      }
    );

    fireEvent.click(getUserButton());

    expect(loadUser).toHaveBeenCalledTimes(1);
  });
});
