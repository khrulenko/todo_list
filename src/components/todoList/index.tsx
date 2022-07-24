import { Todos } from '../../reducers/todosReducer';
import TodoItem from '../todoItem';

type Props = {
  todos: Todos;
};

const TodoList = ({ todos }: Props) => {
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

export default TodoList;
