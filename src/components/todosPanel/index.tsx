import { useState } from 'react';
import { Box, Flex, useMultiStyleConfig } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../../api';
import { Todos } from '../../reducers/todosReducer';
import { getTodos } from '../../store';
import Button from '../button';
import TodoList from '../todoList';
import Input from '../input';
import { capitalizeFirstLetter } from '../../utils';
import { Filters } from '../../constants';
import { setUserAction } from '../../reducers/userReducer';

const TodosPanel = () => {
  const [searchQuery, searchQuerySet] = useState<string>('');
  const [activeFilter, activeFilterSet] = useState<Filters>(Filters.All);
  const todosPanelStyle = useMultiStyleConfig('todosPanel', {});

  const dispatch = useDispatch();
  const onLoad = () => loadTodos(dispatch);
  const onRefresh = () => {
    searchQuerySet('');
    activeFilterSet(Filters.All);
    onLoad();
    dispatch(setUserAction(null));
  };

  const filterByTitle = (todos: Todos) =>
    todos.filter((todo) => todo.title.toLowerCase().includes(searchQuery));
  const filterBycompleteness = (todos: Todos, filter: string) => {
    switch (filter) {
      case Filters.Active:
        return todos.filter((todo) => !todo.completed);

      case Filters.Completed:
        return todos.filter((todo) => todo.completed);

      default:
        return todos;
    }
  };
  const isFilterActive = (filter: string) => filter === activeFilter;

  const todos = useSelector(getTodos);
  const areTodosLoaded = !!todos.length;
  const filteredTodos = filterBycompleteness(
    filterByTitle(todos),
    activeFilter
  );

  const createFilterButton = (filterName: Filters) => (
    <Button
      size="md"
      variant="filter"
      disabled={isFilterActive(filterName)}
      onClick={() => activeFilterSet(filterName)}
    >
      {capitalizeFirstLetter(filterName)}
    </Button>
  );

  return (
    <Box sx={todosPanelStyle}>
      <Flex justify="space-between" gap="10px">
        <Button onClick={areTodosLoaded ? onRefresh : onLoad}>
          {areTodosLoaded ? 'REFRESH' : 'LOAD'}
        </Button>

        <Input
          placeholder="search"
          value={searchQuery}
          onChange={searchQuerySet}
        />
      </Flex>

      {areTodosLoaded && (
        <Flex justify="center" gap="10px">
          {createFilterButton(Filters.All)}
          {createFilterButton(Filters.Active)}
          {createFilterButton(Filters.Completed)}
        </Flex>
      )}

      <TodoList todos={filteredTodos} />
    </Box>
  );
};

export default TodosPanel;
