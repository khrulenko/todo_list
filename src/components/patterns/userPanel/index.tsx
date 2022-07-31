import { Box, useMultiStyleConfig, Text, Flex } from '@chakra-ui/react';
import { User } from '../../../data/reducers/userReducer';

type Props = {
  user: User;
};

const UserPanel = ({ user }: Props) => {
  const userPanelStyle = useMultiStyleConfig('userPanel', {});

  const createDataRow = (title: string | number, data?: string | number) =>
    data && (
      <Box>
        <Text>
          <b>{title}</b>: {data}
        </Text>
      </Box>
    );

  const userDataMap = {
    name: 'User',
    username: 'Nick name',
    id: 'User ID',
    email: 'Email',
    phone: 'Phone',
    website: 'Website',
  };

  const userPanelRows = Object.entries(userDataMap);

  return (
    <Box sx={userPanelStyle}>
      <Flex direction={'column'} gap="10px">
        {userPanelRows.map(([key, title]) => createDataRow(title, user?.[key]))}
      </Flex>
    </Box>
  );
};

export default UserPanel;
