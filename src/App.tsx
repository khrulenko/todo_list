import { Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ErrorAlert from './components/errorAlert';
import TodosPanel from './components/todosPanel';
import UserPanel from './components/userPanel';
import { geRequestError, getUser } from './store';
import { isObjEmpty } from './utils';

const App = () => {
  const user = useSelector(getUser);
  const isUserLoaded = user !== null && !isObjEmpty(user);
  const requestError = useSelector(geRequestError);

  return (
    <>
      <Heading mb="18px">List of todos</Heading>

      <Flex gap="18px">
        <TodosPanel />
        {isUserLoaded && <UserPanel user={user} />}
      </Flex>

      {requestError && <ErrorAlert error={requestError} />}
    </>
  );
};

export default App;
