import { Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ErrorAlert from './components/errorAlert';
import Plug from './components/plug';
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
      <Heading textAlign="center" mb="24px">
        LIST OF TODOS
      </Heading>

      <Flex justifyContent="center" gap="18px">
        <TodosPanel />
        {isUserLoaded ? (
          <UserPanel user={user} />
        ) : (
          <Plug isSticky>here will be choosen user</Plug>
        )}
      </Flex>

      {requestError && <ErrorAlert error={requestError} />}
    </>
  );
};

export default App;
