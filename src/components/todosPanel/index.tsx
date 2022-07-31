import { useCallback, useMemo, useState } from 'react';
import { Box, Flex, useMultiStyleConfig, Text, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../../api';
import { Todos } from '../../reducers/todosReducer';
import { getTodos } from '../../store';
import Button from '../button';
import TodosList from '../todosList';
import Input from '../input';
import { capitalizeFirstLetter, search } from '../../utils';
import { Filters } from '../../constants';
import { setUserAction } from '../../reducers/userReducer';
import { setRequestError } from '../../reducers/requestErrorReducer';
import Plug from '../plug';

const TodosPanel = () => {
  const [searchQuery, searchQuerySet] = useState<string>('');
  const [activeFilter, activeFilterSet] = useState<Filters>(Filters.All);

  //functions:
  const dispatch = useDispatch();
  const onLoad = () => loadTodos(dispatch);
  const onRefresh = () => {
    searchQuerySet('');
    activeFilterSet(Filters.All);
    onLoad();
    dispatch(setRequestError(null));
    dispatch(setUserAction(null));
  };
  const filterByTitle = useCallback(
    (todos: Todos) => todos.filter((todo) => search(todo.title, searchQuery)),
    [searchQuery]
  );
  const filterByCompleteness = (todos: Todos, filter: string) => {
    switch (filter) {
      case Filters.Active:
        return todos.filter((todo) => !todo.completed);

      case Filters.Completed:
        return todos.filter((todo) => todo.completed);

      default:
        return todos;
    }
  };
  const isFilterActive = useCallback(
    (filter: string) => filter === activeFilter,
    [activeFilter]
  );

  //data:
  const todos = useSelector(getTodos);
  const areTodosLoaded = useMemo(() => !!todos.length, [todos]);
  const titleFilteredTodos = useMemo(
    () => filterByTitle(todos),
    [filterByTitle, todos]
  );
  const filteredTodos = useMemo(
    () => filterByCompleteness(titleFilteredTodos, activeFilter),
    [titleFilteredTodos, activeFilter]
  );
  const areThereTodosToShow = useMemo(
    () => !!filteredTodos.length,
    [filteredTodos]
  );
  const plugText = 'there are no todos';

  //ui:
  const todosPanelStyle = useMultiStyleConfig('todosPanel', {});
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

  return areTodosLoaded ? (
    <Box sx={todosPanelStyle}>
      <Flex justify="center" gap="10px">
        <Button onClick={onRefresh}>REFRESH</Button>

        <Input
          placeholder="search"
          value={searchQuery}
          onChange={searchQuerySet}
        />
      </Flex>

      <Flex justify="center" gap="10px">
        {createFilterButton(Filters.All)}
        {createFilterButton(Filters.Active)}
        {createFilterButton(Filters.Completed)}
      </Flex>

      {areThereTodosToShow ? (
        <TodosList todos={filteredTodos} />
      ) : (
        <Plug size="lg">{plugText}</Plug>
      )}
    </Box>
  ) : (
    <Plug size="md">
      <VStack gap="18px">
        <Text>{plugText}</Text>
        <Button variant="start" onClick={onLoad}>
          LOAD TODOS
        </Button>
      </VStack>
    </Plug>
  );
};

export default TodosPanel;
