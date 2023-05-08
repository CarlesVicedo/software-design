const passwordValidation = (password: string) => {
  let numberOfNumbers = 0;
  let numberOfCapitalLetters = 0;
  let numberOfSpecialCharacters = 0;

  for (const letter of password) {
    if (/\d/.test(letter)) {
      numberOfNumbers++;
    }

    if (/[A-Z]/.test(letter)) {
      numberOfCapitalLetters++;
    }

    if (/specialCharacters/.test(letter)) {
      numberOfSpecialCharacters++;
    }
  }

  if (password.length < 8 && numberOfNumbers < 2) {
    throw new Error(
      'Password must be at least 8 characters\nThe password must contain at least 2 numbers',
    );
  }

  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters long');
  }

  if (numberOfNumbers < 2) {
    throw new Error('The password must contain at least 2 numbers');
  }

  if (numberOfCapitalLetters < 1) {
    throw new Error('The password must contain at least one capital letter');
  }

  if (numberOfSpecialCharacters < 1) {
    throw new Error('The password must contain at least one special character');
  }

  if (
    password.length >= 8 &&
    numberOfNumbers >= 2 &&
    numberOfCapitalLetters >= 1 &&
    numberOfSpecialCharacters >= 1
  ) {
    return true;
  }
};

export default passwordValidation;
