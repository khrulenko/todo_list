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

const capitalizeFirstLetter = (string: string): string =>
  string[0].toUpperCase() + string.substring(1);

const isObjEmpty = (object: object): boolean =>
  Object.keys(object).length === 0;

const search = (string: string, query: string): boolean =>
  string.toLowerCase().includes(query.toLowerCase());

export { renderWithRedux, capitalizeFirstLetter, isObjEmpty, search };
