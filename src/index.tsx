import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import mainTheme from './styles/mainTheme';

import store from './store';
import App from './App';

// Just a convenient component with all the wrappers for the `App`
// The Router component (if you use it) should be placed inside the Provider
const Root = () => (
  <Provider store={store}>
    <ChakraProvider theme={mainTheme}>
      <App />
    </ChakraProvider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
