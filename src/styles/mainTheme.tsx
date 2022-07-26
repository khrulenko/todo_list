import { extendTheme } from '@chakra-ui/react';
import buttonStyle from '../components/button/styles';
import globalStyles from './globalStyles';
import inputStyle from '../components/input/styles';
import todosPanelStyle from '../components/todosPanel/styles';
import todoStyle from '../components/todoItem/styles';
import userPanelStyle from '../components/userPanel/styles';
import errorAlertStyle from '../components/errorAlert/styles';
import plugStyle from '../components/plug/styles';

// color palette: https://colorhunt.co/palette/fbf8f1f7ecdee9dac154bab9

const componentsList = {
  todosPanel: todosPanelStyle,
  userPanel: userPanelStyle,
  button: buttonStyle,
  todo: todoStyle,
  input: inputStyle,
  errorAlert: errorAlertStyle,
  plug: plugStyle,
};

const theme = {
  styles: globalStyles,
  components: componentsList,
  colors: {
    cream: {
      dark: '#E9DAC1',
      base: '#F7ECDE',
      light: '#FBF8F1',
    },
    green: {
      base: '#54BAB9',
      light: '#CEE5D0',
    },
    orange: {
      light: '#FAD9A1',
    },
    red: {
      error: '#F39189',
    },
  },
  fontSizes: {},
};

const mainTheme = extendTheme(theme);

export default mainTheme;
