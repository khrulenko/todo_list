import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import mainTheme from './styles/mainTheme';
import store from './data/store';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <ChakraProvider theme={mainTheme}>
      <App />
    </ChakraProvider>
  </Provider>
);
