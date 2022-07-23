import { Flex, Heading } from '@chakra-ui/react';
import TodosPanel from './components/todosPanel';
import UserPanel from './components/userPanel';

const App = () => {
  return (
    <>
      <Heading mb="20px">List of todos</Heading>
      <Flex gap="20px">
        <TodosPanel />
        <UserPanel />
      </Flex>
    </>
  );
};

export default App;
