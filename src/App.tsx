import { Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ErrorAlert from './components/patterns/errorAlert';
import Plug from './components/patterns/plug';
import TodosPanel from './components/patterns/todosPanel';
import UserPanel from './components/patterns/userPanel';
import { getRequestError, getUser } from './data/store';
import { isObjEmpty } from './common/utils';

const App = () => {
  const user = useSelector(getUser);
  const isUserLoaded = user !== null && !isObjEmpty(user);
  const requestError = useSelector(getRequestError);

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
