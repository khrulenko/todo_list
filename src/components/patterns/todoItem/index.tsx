import { useSelector } from 'react-redux';
import { getLoading, getUser } from '../../../data/store';
import { Flex, useMultiStyleConfig, Text, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../../common/api';
import { Todo } from '../../../data/reducers/todosReducer';
import Button from '../../primitives/button';

type Props = {
  todo: Todo;
  index: number;
};

/*
 * TodoItem component
 */
const TodoItem = (props: Props) => {
  const {
    todo: { title, userId },
    index,
  } = props;

  const dispatch = useDispatch();
  const onLoad = () => loadUser(dispatch, userId);

  const currentUser = useSelector(getUser);
  const { isLoadingUser, endPoint } = useSelector(getLoading);
  const isButtonDisabled = userId === currentUser?.id || isLoadingUser;

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

export default TodoItem;
