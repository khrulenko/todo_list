import {
  Button as ChakraButton,
  chakra,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { AnyFunction } from '../../types';

type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonVariants = 'choseUser' | 'filter' | 'start';

type Props = {
  disabled?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  onClick: AnyFunction;
  children?: any;
  showAnimation?: boolean;
};

const Button = (props: Props) => {
  const { onClick, disabled } = props;
  const buttonStyle = useMultiStyleConfig('button', props);

  return (
    <ChakraButton disabled={disabled} sx={buttonStyle} onClick={onClick}>
      {props?.children}
    </ChakraButton>
  );
};

export default chakra(Button);
