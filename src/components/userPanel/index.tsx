import { Box, useMultiStyleConfig, Text, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getUser } from '../../store';
import { isObjEmpty } from '../../utils';

const UserPanel = () => {
  const userPanelStyle = useMultiStyleConfig('userPanel', {});

  const user = useSelector(getUser);
  const isUserLoaded = user !== null && !isObjEmpty(user);

  const createDataRow = (title: string, data?: string | number) =>
    data && (
      <Box>
        <Text>
          <b>{title}</b>: {data}
        </Text>
      </Box>
    );

  return (
    <Box sx={userPanelStyle}>
      {isUserLoaded ? (
        <Flex direction={'column'} gap="10px">
          {createDataRow('User', user.name)}
          {createDataRow('Nick name', user.username)}
          {createDataRow('User ID', user.id)}
          {createDataRow('Email', user.email)}
          {createDataRow('Phone', user.phone)}
          {createDataRow('Website', user.website)}
        </Flex>
      ) : (
        <b>There is no user yet</b>
      )}
    </Box>
  );
};

export default UserPanel;
