import { Box, useMultiStyleConfig, Text, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { isObjEmpty } from '../../../common/utils';
import { getUser } from '../../../data/store';
import Plug from '../plug';

/*
 * UserPanel component
 */
const UserPanel = () => {
  const user = useSelector(getUser);
  const isUserLoaded = user !== null && !isObjEmpty(user);

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

  return isUserLoaded ? (
    <Box sx={userPanelStyle}>
      <Flex direction="column" gap="10px">
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
  ) : (
    <Plug isSticky>here will be choosen user</Plug>
  );
};

export default UserPanel;
