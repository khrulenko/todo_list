import {
  Flex, useMultiStyleConfig, Text, Box,
} from '@chakra-ui/react';
import { Todo } from '../../reducers/todosReducer';
import Button from '../button';

type Props = {
  todo: Todo;
  index: number;
};

const TodoItem = (props: Props) => {
  const { todo, index } = props;
  const { title, userId } = todo;

  const todoStyle = useMultiStyleConfig('todo', props);

  return (
    <Box sx={todoStyle}>
      <Flex align="center" justify="space-between" gap="10px">
        <Text>
          <b>
            {index}
            .
          </b>
          {' '}
          {title}
        </Text>

        <Button variant="choseUser" size="sm" onClick={() => {}}>
          user #
          <br />
          {userId}
        </Button>
      </Flex>
    </Box>
  );
};

export default TodoItem;
