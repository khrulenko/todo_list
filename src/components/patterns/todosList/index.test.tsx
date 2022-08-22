import { screen } from '@testing-library/react';
import TodosList from '.';
import { mockedTodos } from '../../../common/mocks';
import { renderWithRedux } from '../../../common/utils';

describe('TodosList', () => {
  test('should create a list of todos if todos was passed to the props', () => {
    renderWithRedux(<TodosList todos={mockedTodos} />);

    const todoItems = screen.getAllByTestId('todoitem');

    expect(todoItems).toHaveLength(3);
  });

  test('should not create a list of todos if there are no todos', () => {
    renderWithRedux(<TodosList todos={[]} />);

    const todoItems = screen.queryAllByTestId('todoitem');

    expect(todoItems).toHaveLength(0);
  });
});
