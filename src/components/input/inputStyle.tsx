import { ComponentStyleConfig } from '@chakra-ui/theme';

const inputStyle: ComponentStyleConfig = {
  parts: ['wrapper', 'input', 'clear'],
  baseStyle: {
    wrapper: {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      width: '100%',
      maxWidth: '300px',
      height: '40px',
      '&:hover, &:focus': {
        borderColor: 'green.base',
        boxShadow: 'none',
        svg: {
          '&:hover': {
            opacity: '0.5',
          },
        },
      },
    },
    input: {
      padding: '0 36px 0 12px',
      '&:hover, &:focus': {
        borderColor: 'green.base',
        boxShadow: 'none',
      },
    },
    clear: {
      position: 'absolute',
      right: '0',
      zIndex: '1',
      padding: '0',
      width: '36px',
      height: '36px',
      backgroundColor: 'transparent',
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      svg: {
        width: '12px',
        height: '12px',
      },
    },
  },
};

export default inputStyle;
