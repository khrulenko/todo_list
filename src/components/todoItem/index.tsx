import { Flex, useMultiStyleConfig, Text, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../api';
import { Todo } from '../../reducers/todosReducer';
import { getLoading, getUser } from '../../store';
import Button from '../button';

type Props = {
  todo: Todo;
  index: number;
};

const TodoItem = (props: Props) => {
  const { todo, index } = props;
  const { title, userId } = todo;

  const dispatch = useDispatch();
  const onLoad = () => loadUser(dispatch, userId);
  const user = useSelector(getUser);
  const { requesting, endPoint } = useSelector(getLoading);
  const isButtonDisabled = userId === user?.id || !userId || requesting;

  const todoStyle = useMultiStyleConfig('todo', props);

  return (
    <Box sx={todoStyle}>
      <Flex align="center" justify="space-between" gap="10px">
        <Text>
          <b>{index}.</b> {title}
        </Text>

        <Button
          disabled={isButtonDisabled}
          variant="choseUser"
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
