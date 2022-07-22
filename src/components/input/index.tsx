import {
  chakra,
  Input as ChakraInput,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { AnyFunction } from '../../types';

type Props = {
  type?: string;
  placeholder?: string;
  value: any;
  onChange: AnyFunction;
};

const Input = (props: Props) => {
  const {
    type = 'text', placeholder = 'enter', value, onChange,
  } = props;

  const inputStyle = useMultiStyleConfig('input', props);

  return (
    <ChakraInput
      sx={inputStyle}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default chakra(Input);
