import { Todos } from '../../reducers/todosReducer';
import TodoItem from '../todoItem';

type Props = {
  todos: Todos;
};

const TodoList = ({ todos }: Props) => {
  const areThereTodosToShow = !!todos.length;

  return (
    <>
      {areThereTodosToShow ? (
        todos.map((todo, i) => <TodoItem todo={todo} index={i + 1} />)
      ) : (
        <b>Sorry, there are no todos yet.</b>
      )}
    </>
  );
};

export default TodoList;
