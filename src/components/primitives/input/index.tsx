import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Input as ChakraInput,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { AnyFunction, ChangeEvent } from '../../../common/types';

type Props = {
  type?: string;
  placeholder?: string;
  value: any;
  onChange: AnyFunction;
};

/*
 * Input component
 */
const Input = (props: Props) => {
  const { type = 'text', placeholder = 'enter', value, onChange } = props;
  const onHandleChange = (event: ChangeEvent) => onChange(event.target.value);
  const onHandleClear = () => onChange('');

  const styles = useMultiStyleConfig('input', props);

  return (
    <Box data-testid="inputwrapper" sx={styles.wrapper}>
      <ChakraInput
        data-testid="input"
        sx={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onHandleChange}
      />
      <Button
        data-testid="clearButton"
        sx={styles.clear}
        size="sm"
        onClick={onHandleClear}
      >
        <CloseIcon color="green.base" />
      </Button>
    </Box>
  );
};

export default Input;
