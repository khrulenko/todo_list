import { ComponentStyleConfig } from '@chakra-ui/theme';

const buttonStyle: ComponentStyleConfig = {
  baseStyle: {
    width: '150px',
    padding: '8px',
    marginBottom: '16px',

    color: 'cream.light',
    bgColor: 'green.base',
    border: '1px solid green.base',
    '&:hover': {
      bgColor: 'green.base',
      opacity: '0.5',
    },
    '&:focus': {
      boxShadow: 'none',
    },
    '&:disabled': {
      bgColor: 'green.base',
      opacity: '0.5',
      cursor: 'default',
      '&:hover': {
        bgColor: 'green.base',
        opacity: '0.5',
      },
    },
  },
  sizes: {
    sm: {
      maxWidth: '60px',
    },
    md: {
      width: '100px',
      height: '30px',
    },
    lg: {
      width: '150px',
    },
  },
  variants: {
    choseUser: {
      marginBottom: '0',
    },
    filter: (props) => ({
      bgColor: 'green.base',
    }),
  },
  defaultProps: {
    size: 'lg',
  },
};

export default buttonStyle;
