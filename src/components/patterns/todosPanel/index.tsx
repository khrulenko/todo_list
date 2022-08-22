import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, useMultiStyleConfig, Text, VStack } from '@chakra-ui/react';
import { loadTodos } from '../../../common/api';
import { Todos } from '../../../data/reducers/todosReducer';
import { getLoading, getTodos } from '../../../data/store';
import Button from '../../primitives/button';
import TodosList from '../todosList';
import Input from '../../primitives/input';
import { capitalizeFirstLetter, search } from '../../../common/utils';
import { Filters } from '../../../common/constants';
import { setUserAction } from '../../../data/reducers/userReducer';
import { setRequestError } from '../../../data/reducers/requestErrorReducer';
import Plug from '../plug';

/*
 * TodosPanel component
 */
const TodosPanel = () => {
  const [searchQuery, searchQuerySet] = useState<string>('');
  const [activeFilter, activeFilterSet] = useState<Filters>(Filters.All);

  // functions:
  const dispatch = useDispatch(),
    onLoad = () => loadTodos(dispatch),
    onRefresh = () => {
      searchQuerySet('');
      activeFilterSet(Filters.All);
      onLoad();
      dispatch(setRequestError(null));
      dispatch(setUserAction(null));
    },
    filterByTitle = useCallback(
      (todos: Todos) => todos.filter((todo) => search(todo.title, searchQuery)),
      [searchQuery]
    ),
    filterByCompleteness = (todos: Todos, filter: string) => {
      switch (filter) {
        case Filters.Active:
          return todos.filter((todo) => !todo.completed);

        case Filters.Completed:
          return todos.filter((todo) => todo.completed);

        default:
          return todos;
      }
    },
    isFilterActive = useCallback(
      (filter: string) => filter === activeFilter,
      [activeFilter]
    );

  // data:
  const todos = useSelector(getTodos),
    areTodosLoaded = useMemo(() => !!todos.length, [todos]),
    titleFilteredTodos = useMemo(
      () => filterByTitle(todos),
      [filterByTitle, todos]
    ),
    filteredTodos = useMemo(
      () => filterByCompleteness(titleFilteredTodos, activeFilter),
      [titleFilteredTodos, activeFilter]
    ),
    areThereTodosToShow = useMemo(
      () => !!filteredTodos.length,
      [filteredTodos]
    ),
    filterButtons = Object.values(Filters),
    { isLoadingTodos } = useSelector(getLoading),
    plugText = 'there are no todos';

  // ui:
  const todosPanelStyle = useMultiStyleConfig('todosPanel', {}),
    createFilterButton = (filterName: Filters) => (
      <Button
        key={filterName}
        size="md"
        disabled={isFilterActive(filterName)}
        onClick={() => activeFilterSet(filterName)}
      >
        {capitalizeFirstLetter(filterName)}
      </Button>
    ),
    wrapperParams = {
      mb: '16px',
      justify: 'center',
      gap: '10px',
    };

  return areTodosLoaded ? (
    <Box sx={todosPanelStyle}>
      <Flex {...wrapperParams}>
        <Button showAnimation={isLoadingTodos} onClick={onRefresh}>
          REFRESH
        </Button>

        <Input
          placeholder="search"
          value={searchQuery}
          onChange={searchQuerySet}
        />
      </Flex>

      <Flex {...wrapperParams}>{filterButtons.map(createFilterButton)}</Flex>

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
        <Button showAnimation={isLoadingTodos} variant="start" onClick={onLoad}>
          LOAD TODOS
        </Button>
      </VStack>
    </Plug>
  );
};

export default TodosPanel;
