import { ComponentStyleConfig } from '@chakra-ui/theme';

const plugStyle: ComponentStyleConfig = {
  baseStyle: (props) => {
    const { isSticky } = props;

    return {
      wrapper: {
        position: isSticky ? 'sticky' : 'relative',
        top: isSticky ? '18px' : '',

        padding: '16px',
        backgroundColor: 'cream.light',
        borderRadius: '8px',
      },
      plug: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        padding: '16px',

        height: '100%',
        width: '100%',

        borderRadius: '8px',
        border: '1px',
        borderStyle: 'dashed',
        borderColor: 'cream.dark',

        color: 'cream.dark',
        fontWeight: 'bold',
        textAligh: 'center',
      },
    };
  },
  sizes: {
    sm: {
      wrapper: {
        height: '230px',
        width: '40%',
        maxWidth: '300px',
      },
    },
    md: {
      wrapper: {
        width: '60%',
        minWidth: '300px',
        maxWidth: '500px',
      },
    },
    lg: {
      width: '100%',
    },
  },
  defaultProps: {
    size: 'sm',
  },
};

export default plugStyle;
