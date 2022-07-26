import { ComponentStyleConfig } from '@chakra-ui/theme';

const errorAlertStyle: ComponentStyleConfig = {
  baseStyle: {
    wrapper: {
      zIndex: '2',
      position: 'fixed',
      top: '18px',
      left: '50%',
      transform: 'translate(-50%, 0)',

      padding: '16px',

      width: 'auto',
      maxWidth: '600px',

      borderRadius: '8px',
      backgroundColor: 'red.error',

      fontSize: '18px',
      lineHeight: '18px',
      fontWeight: 'bold',
    },
    icon: {
      marginRight: '8px',
    },
  },
};

export default errorAlertStyle;
