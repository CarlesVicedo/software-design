const passwordValidation = (password: string) => {
  let numberOfNumbers = 0;
  let numberOfCapitalLetters = 0;
  let numberOfSpecialCharacters = 0;

  const lengthAndNumbersError =
    'Password must be at least 8 characters\nThe password must contain at least 2 numbers';
  const lengthError = 'Password must be at least 8 characters long';
  const numbersError = 'The password must contain at least 2 numbers';
  const capitalLettersError =
    'The password must contain at least one capital letter';
  const specialCharactersError =
    'The password must contain at least one special character';

  for (const letter of password) {
    if (/\d/.test(letter)) {
      numberOfNumbers++;
    }

    if (/[A-Z]/.test(letter)) {
      numberOfCapitalLetters++;
    }

    if (/\W|_/g.test(letter)) {
      numberOfSpecialCharacters++;
    }
  }

  if (password.length < 8 && numberOfNumbers < 2) {
    throw new Error(lengthAndNumbersError);
  }

  if (password.length < 8) {
    throw new Error(lengthError);
  }

  if (numberOfNumbers < 2) {
    throw new Error(numbersError);
  }

  if (numberOfCapitalLetters < 1) {
    throw new Error(capitalLettersError);
  }

  if (numberOfSpecialCharacters < 1) {
    throw new Error(specialCharactersError);
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
