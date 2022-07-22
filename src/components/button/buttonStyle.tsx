import { ComponentStyleConfig } from '@chakra-ui/theme';

const buttonStyle: ComponentStyleConfig = {
  baseStyle: {
    width: '150px',
    padding: '5px',
    marginBottom: '20px',
    color: '#FBF8F1',
    bgColor: '#54BAB9',
    border: '1px solid #54BAB9',
    '&:hover': {
      bgColor: '#54BAB9',
      opacity: '0.5',
    },
    '&:focus': {
      boxShadow: 'none',
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
      bgColor: '#54BAB9',
      opacity: props.isActive ? '0.5' : '1',
      cursor: props.isActive ? 'default' : 'pointer',
    }),
  },
  defaultProps: {
    size: 'lg',
  },
};

export default buttonStyle;
