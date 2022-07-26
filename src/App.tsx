import { Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ErrorAlert from './components/errorAlert';
import TodosPanel from './components/todosPanel';
import UserPanel from './components/userPanel';
import { geRequestError } from './store';

const App = () => {
  const requestError = useSelector(geRequestError);

  return (
    <>
      <Heading mb="18px">List of todos</Heading>

      <Flex gap="18px">
        <TodosPanel />
        <UserPanel />
      </Flex>

      {requestError && <ErrorAlert error={requestError} />}
    </>
  );
};

export default App;
