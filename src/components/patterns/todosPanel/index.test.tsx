import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import TodosPanel from '.';
import { mockedTodos } from '../../../common/mocks';
import { renderWithRedux } from '../../../common/utils';

const stateWithTodos = { initialState: { todos: mockedTodos } };

describe('TodosPanel', () => {
  test('should show plug text if todos are not loaded', () => {
    renderWithRedux(<TodosPanel />, { initialState: { todos: [] } });
    const todosPlug = screen.getByText('there are no todos');

    expect(todosPlug).toBeInTheDocument();
  });

  test('should show all todos initially if todos are loaded', () => {
    renderWithRedux(<TodosPanel />, stateWithTodos);
    const todoItems = screen.getAllByTestId('todoitem');

    expect(todoItems).toHaveLength(3);
  });

  test('initially "ALL" filter button is disabled', () => {
    renderWithRedux(<TodosPanel />, stateWithTodos);
    const allFilterButton = screen.getByText('All');

    expect(allFilterButton).toBeDisabled();
  });

  test('after click on "Active" filter button only active todos are shown', () => {
    renderWithRedux(<TodosPanel />, stateWithTodos);
    const activeFilterButton = screen.getByText('Active');

    fireEvent.click(activeFilterButton);
    const todoItems = screen.getAllByTestId('todoitem');

    expect(todoItems).toHaveLength(2);
  });

  test('after click on "Completed" filter button only Completed todos are shown', () => {
    renderWithRedux(<TodosPanel />, stateWithTodos);
    const completedFilterButton = screen.getByText('Completed');

    fireEvent.click(completedFilterButton);
    const todoItems = screen.getAllByTestId('todoitem');

    expect(todoItems).toHaveLength(1);
  });

  test('should show only todos that include query string', () => {
    renderWithRedux(<TodosPanel />, stateWithTodos);
    const searchInput = screen.getByTestId('input');

    fireEvent.change(searchInput, { target: { value: 'delectus' } });
    const todoItems = screen.getAllByTestId('todoitem');

    expect(todoItems).toHaveLength(1);
  });

  test('should show plug text if there are no todos that include query string', () => {
    renderWithRedux(<TodosPanel />, stateWithTodos);
    const searchInput = screen.getByTestId('input');

    fireEvent.change(searchInput, { target: { value: '12345' } });
    const plugText = screen.getByText('there are no todos');

    expect(plugText).toBeInTheDocument();
  });
});
