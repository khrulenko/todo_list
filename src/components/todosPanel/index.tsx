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
import { ChangeEvent } from '../../types';

const TodosPanel = (props: {}) => {
  const [searchQuery, searchQuerySet] = useState('');
  const [completenessFilter, completenessFilterSet] = useState('all');
  const todosPanelStyle = useMultiStyleConfig('todosPanel', props);

  const dispatch = useDispatch();
  const onLoad = () => loadTodos(dispatch);
  const onRefresh = () => {
    searchQuerySet('');
    onLoad();
  };

  const onSearchChange = (event: ChangeEvent) => searchQuerySet(event.target.value);
  const filterByTitle = (todos: Todos) => todos.filter((todo) => todo.title.toLowerCase().includes(searchQuery));
  const filterBycompleteness = (todos: Todos, filter: string) => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);

      case 'completed':
        return todos.filter((todo) => todo.completed);

      default:
        return todos;
    }
  };

  const isFilterActive = (filter: string) => completenessFilter === filter;

  const todos = useSelector(getTodos);
  const filteredTodos = filterBycompleteness(
    filterByTitle(todos),
    completenessFilter,
  );
  const areTodosLoaded = !!todos.length;

  const createFilterButton = (filterName: string) => (
    <Button
      size="md"
      variant="filter"
      isActive={isFilterActive(filterName)}
      onClick={() => completenessFilterSet(filterName)}
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
          onChange={onSearchChange}
        />
      </Flex>

      {areTodosLoaded && (
        <Flex justify="center" gap="10px">
          {createFilterButton('all')}

          {createFilterButton('active')}

          {createFilterButton('completed')}
        </Flex>
      )}

      <TodoList todos={filteredTodos} />
    </Box>
  );
};

export default TodosPanel;
