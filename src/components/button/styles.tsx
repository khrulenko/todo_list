import { ComponentStyleConfig } from '@chakra-ui/theme';

const buttonStyle: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { showAnimation } = props;

    return {
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
      '@keyframes loading': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
      '::before': {
        content: "' '",
        position: 'absolute',
        display: showAnimation ? 'block' : 'none',
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        bgColor: 'inherit',
        opacity: '0.8',
      },
      '::after': {
        content: "' '",
        display: showAnimation ? 'block' : 'none',
        position: 'absolute',
        borderRadius: '50%',
        border: '4px solid',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'cream.light',
        borderBottomColor: 'cream.light',
        animation: 'loading 1s linear infinite',
      },
    };
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
      '::after': {
        width: '24px',
        height: '24px',
        margin: '8px',
      },
    },
    filter: (props) => ({
      bgColor: 'green.base',
    }),
    start: {
      border: '1px solid',
      borderColor: 'cream.dark',
      bgColor: 'cream.dark',
      color: 'cream.light',
      '&:hover': {
        bgColor: 'cream.light',
        color: 'cream.dark',
        opacity: '1',
      },
      '&:focus': {
        boxShadow: 'none',
      },
      '&:disabled': {
        bgColor: 'cream.light',
        opacity: '1',
        cursor: 'default',
        color: 'cream.dark',
        '&:hover': {
          bgColor: 'cream.light',
          opacity: '1',
        },
      },
    },
  },
  defaultProps: {
    size: 'lg',
  },
};

export default buttonStyle;
