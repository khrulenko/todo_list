import { extendTheme } from '@chakra-ui/react';
import buttonStyle from '../components/button/buttonStyle';
import globalStyles from './globalStyles';
import inputStyle from '../components/input/inputStyle';
import todosPanelStyle from '../components/todosPanel/todosPanelStyle';
import todoStyle from '../components/todoItem/todoStyle';
import userPanelStyle from '../components/userPanel/userPanelStyle';

// color palette: https://colorhunt.co/palette/fbf8f1f7ecdee9dac154bab9

const componentsList = {
  todosPanel: todosPanelStyle,
  userPanel: userPanelStyle,
  button: buttonStyle,
  todo: todoStyle,
  input: inputStyle,
};

const theme = {
  styles: globalStyles,
  components: componentsList,
  colors: {
    red: {},
  },
  fontSizes: {},
};

const mainTheme = extendTheme(theme);

export default mainTheme;
