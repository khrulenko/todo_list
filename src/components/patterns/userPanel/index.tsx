import { Box, useMultiStyleConfig, Text, Flex } from '@chakra-ui/react';
import { StrOrNum } from '../../../common/types';
import { User } from '../../../data/reducers/userReducer';

type Props = {
  user: User;
};

/*
 * UserPanel component
 */
const UserPanel = ({ user }: Props) => {
  const userPanelStyle = useMultiStyleConfig('userPanel', {});

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
        {userPanelRows.map(([key, title]) => {
          const data = user[key];

          return (
            data && (
              <Box key={key}>
                <Text>
                  <b>{title}</b>: {data}
                </Text>
              </Box>
            )
          );
        })}
      </Flex>
    </Box>
  );
};

export default UserPanel;
