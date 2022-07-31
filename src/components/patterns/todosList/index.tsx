import { Todos } from '../../../data/reducers/todosReducer';
import TodoItem from '../todoItem';

type Props = {
  todos: Todos;
};

/*
 * TodosList component
 */
const TodosList = ({ todos }: Props) => {
  const areThereTodosToShow = !!todos.length;

  return (
    <>
      {areThereTodosToShow &&
        todos.map((todo, i) => (
          <TodoItem key={todo.id} todo={todo} index={i + 1} />
        ))}
    </>
  );
};

export default TodosList;
