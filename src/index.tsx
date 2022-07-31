import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import mainTheme from './styles/mainTheme';
import store from './data/store';
import App from './App';

const Root = () => (
  <Provider store={store}>
    <ChakraProvider theme={mainTheme}>
      <App />
    </ChakraProvider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
