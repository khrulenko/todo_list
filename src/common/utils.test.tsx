import { capitalizeFirstLetter, isObjEmpty, search } from './utils';

describe('capitalizeFirstLetter', () => {
  test('returns a string with capitalized first letter', () => {
    expect(capitalizeFirstLetter('test string')).toBe('Test string');
  });
});

describe('isObjEmpty', () => {
  test('returns true if an object is empty', () => {
    expect(isObjEmpty({})).toBe(true);
  });

  test('returns false if an object is not empty', () => {
    expect(isObjEmpty({ test: 'test' })).toBe(false);
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
