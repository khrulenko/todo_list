import { Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ErrorAlert from './components/patterns/errorAlert';
import TodosPanel from './components/patterns/todosPanel';
import UserPanel from './components/patterns/userPanel';
import { getRequestError } from './data/store';
import UpButton from './components/patterns/upButton';

const App = () => {
  const requestError = useSelector(getRequestError);

  return (
    <>
      <Heading textAlign="center" mb="24px">
        LIST OF TODOS
      </Heading>

      <Flex justifyContent="center" gap="18px">
        <TodosPanel />

        <UserPanel />

        <UpButton />
      </Flex>

      {requestError && <ErrorAlert error={requestError} />}
    </>
  );
};

export default App;
