import { WarningIcon } from '@chakra-ui/icons';
import { Text, Flex, useMultiStyleConfig, Fade, Slide } from '@chakra-ui/react';

type Props = {
  error: string;
};

const ErrorAlert = ({ error }: Props) => {
  const styles = useMultiStyleConfig('errorAlert', {});

  return (
    <Fade in={!!error}>
      <Flex sx={styles.wrapper}>
        <WarningIcon sx={styles.icon} />
        <Text>{error}</Text>
      </Flex>
    </Fade>
  );
};

export default ErrorAlert;
