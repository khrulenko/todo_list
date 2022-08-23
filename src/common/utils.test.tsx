import {
  capitalizeFirstLetter,
  getTabFocusSelectors,
  isObjEmpty,
  search,
} from './utils';

describe('getTabFocusSelectors', () => {
  const mokedFocusStyles = {
    outline: 'solid 1px',
    outlineColor: 'green',
    outlineOffset: '0',
    opacity: '0.5',
    boxShadow: 'none',
  };

  test('should return default styles if there are no passed styles', () => {
    const resultWithNoPassedStyles = {
      '@supports not selector(:focus-visible)': {
        _focus: mokedFocusStyles,
      },
      ':focus-visible': mokedFocusStyles,
    };

    expect(getTabFocusSelectors()).toEqual(resultWithNoPassedStyles);
  });

  test('should merge default styles with passed styles', () => {
    const resultWithPassedStyles = {
      '@supports not selector(:focus-visible)': {
        _focus: { ...mokedFocusStyles, outlineColor: 'brown' },
      },
      ':focus-visible': { ...mokedFocusStyles, outlineColor: 'brown' },
    };

    expect(getTabFocusSelectors({ outlineColor: 'brown' })).toEqual(
      resultWithPassedStyles
    );
  });
});

describe('capitalizeFirstLetter', () => {
  test('returns a string with capitalized first letter', () => {
    expect(capitalizeFirstLetter('test string')).toBe('Test string');
  });
});

describe('isObjEmpty', () => {
  test('returns true if an object is empty', () => {
    const emptyObject = {};
    expect(isObjEmpty(emptyObject)).toBe(true);
  });

  test('returns false if an object is not empty', () => {
    const notEmptyObject = { test: 'test' };
    expect(isObjEmpty(notEmptyObject)).toBe(false);
  });
});

describe('search', () => {
  test('returns true if a string includes query substring', () => {
    expect(search('Test String', 'str')).toBe(true);
  });

  test('returns false if a string does not include query substring', () => {
    expect(search('Test', 'str')).toBe(false);
  });
});
