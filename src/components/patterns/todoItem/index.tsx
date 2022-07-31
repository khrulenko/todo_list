import { Flex, useMultiStyleConfig, Text, Box } from '@chakra-ui/react';
import { connect, useDispatch } from 'react-redux';
import { loadUser } from '../../../common/api';
import { Loading } from '../../../data/reducers/loadingReducer';
import { Todo } from '../../../data/reducers/todosReducer';
import { User } from '../../../data/reducers/userReducer';
import { getLoading, getUser, State } from '../../../data/store';
import Button from '../../primitives/button';

type Props = {
  todo: Todo;
  index: number;
  currentUser: User;
  loading: Loading;
};

const mapState = (state: State) => ({
  currentUser: getUser(state),
  loading: getLoading(state),
});

const connector = connect(mapState, {});

/*
 * TodoItem component
 */
const TodoItem = (props: Props) => {
  const { todo, index, currentUser, loading } = props;
  const { title, userId } = todo;

  const dispatch = useDispatch();
  const onLoad = () => loadUser(dispatch, userId);
  const { requesting, endPoint } = loading;
  const isButtonDisabled = userId === currentUser?.id || !userId || requesting;

  const todoStyle = useMultiStyleConfig('todo', props);

  return (
    <Box sx={todoStyle}>
      <Flex align="center" justify="space-between" gap="10px">
        <Text>
          <b>{index}.</b> {title}
        </Text>

        <Button
          disabled={isButtonDisabled}
          size="sm"
          onClick={onLoad}
          showAnimation={userId === endPoint}
        >
          user #
          <br />
          {userId}
        </Button>
      </Flex>
    </Box>
  );
};

export default connector(TodoItem);
