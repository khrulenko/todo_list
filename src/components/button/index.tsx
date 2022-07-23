import { Button as ChakraButton, useMultiStyleConfig } from '@chakra-ui/react';
import { AnyFunction } from '../../types';

type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonVariants = 'choseUser' | 'filter';

type Props = {
  isActive?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  onClick: AnyFunction;
  children?: any;
};

const Button = (props: Props) => {
  const { onClick, isActive } = props;
  const buttonStyle = useMultiStyleConfig('button', props);

  return (
    <ChakraButton disabled={isActive} sx={buttonStyle} onClick={onClick}>
      {props?.children}
    </ChakraButton>
  );
};

export default Button;
