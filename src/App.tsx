import { Heading } from '@chakra-ui/react';
import TodosPanel from './components/todosPanel';

const App = () => {
  return (
    <>
      <Heading mb="20px">List of todos</Heading>
      <TodosPanel />
    </>
  );
};

export default App;
