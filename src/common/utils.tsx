import { ChakraProps } from '@chakra-ui/react';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from '../data/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: any;
  store?: any;
}

const renderWithRedux = (
  component: React.ReactElement,
  {
    initialState = {},
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return {
    store,
    ...render(component, { wrapper: Wrapper, ...renderOptions }),
  };
};

const getTabFocusSelectors = (styles?: ChakraProps): object => {
  const defaultFocusStyles = {
    outline: 'solid 1px',
    outlineColor: 'green',
    outlineOffset: '0',
    opacity: '0.5',
    boxShadow: 'none',
  };

  const mergedStyles = {
    ...defaultFocusStyles,
    ...styles,
  };

  return {
    '@supports not selector(:focus-visible)': {
      _focus: mergedStyles,
    },
    ':focus-visible': mergedStyles,
  };
};

const capitalizeFirstLetter = (string: string): string =>
  string[0].toUpperCase() + string.substring(1);

const isObjEmpty = (object: object): boolean =>
  Object.keys(object).length === 0;

const search = (string: string, query: string): boolean =>
  string.toLowerCase().includes(query.toLowerCase());

export {
  renderWithRedux,
  getTabFocusSelectors,
  capitalizeFirstLetter,
  isObjEmpty,
  search,
};
