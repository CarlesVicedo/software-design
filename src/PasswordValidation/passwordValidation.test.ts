import passwordValidation from './passwordValidation';

describe('Given a password validation', () => {
  test('When a passwordValidation function is provided, then it should be a function', () => {
    expect(typeof passwordValidation).toBe('function');
  });

  describe('When a password is provided', () => {
    test('Then it has to be checked if its equal or larger than 8 characters and throw an error if it is not', () => {
      expect(() => passwordValidation('1234567')).toThrow(
        new Error('Password must be at least 8 characters long'),
      );
    });

    test('Then it has to be checked if it contains at least two numbers, otherwise throw an error', () => {
      expect(() => passwordValidation('abcdefg7')).toThrow(
        new Error('The password must contain at least 2 numbers'),
      );
    });

    test('Then it has to be able to throw two errors', () => {
      expect(() => passwordValidation('sword')).toThrow(
        new Error(
          'Password must be at least 8 characters\nThe password must contain at least 2 numbers',
        ),
      );
    });

    test('Then it has to be checked if it contains at least one capital letter, otherwise throw an error', () => {
      expect(() => passwordValidation('sword1234')).toThrow(
        new Error('The password must contain at least one capital letter'),
      );
    });

    test('Then it has to be checked if it contains at least one special character, otherwise throw an error', () => {
      expect(() => passwordValidation('Sword1234')).toThrow(
        new Error('The password must contain at least one special character'),
      );
    });

    test('Then it has to return true when a valid password is provided', () => {
      expect(() => passwordValidation('Sword1234&')).toBeTruthy();
    });
  });
});
