import { ComponentStyleConfig } from '@chakra-ui/theme';

const inputStyle: ComponentStyleConfig = {
  baseStyle: {
    '&:hover, &:focus': {
      borderColor: 'green.base',
      boxShadow: 'none',
    },
  },
};

export default inputStyle;
