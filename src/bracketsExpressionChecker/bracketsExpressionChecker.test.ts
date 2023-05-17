/* Construir una función que dado un string compruebe si una expresion de parentesis, corchetes y llaves juntas es correcta (ejemplo: ‘[({[]})]’ seria true // ‘[{}’ seria false)
          Entrada: string
          Salida: boolean, true si la cadena es correcta
          Ejemplos:
            - [({[]})] --> true
            - [{} --> false
            - () --> true
            - ([)] --> false
            - ()() --> true
            - [(({}))}] --> false */

// STACK:
// Tener un método para introducir elementos en el stack
// Tener un método para sacar elementos del stack
// Tener un metodo para comprobar length del stack

import BracketsExpressionChecker from './bracketsExpressionChecker';

describe('Given a bracketsExpressionChecker function', () => {
  describe('When it receives a string with an odd length', () => {
    test('Then it should return false', () => {
      const newChecker = new BracketsExpressionChecker();
      const result = newChecker.check('[()');
      expect(result).toBe(false);
    });
  });

  describe('When it receives a string ', () => {
    test('Then it should store the first character in the stack', () => {
      const newChecker = new BracketsExpressionChecker();
      newChecker.clean();
      newChecker.add('[');
      const lastValue = newChecker.extract();
      expect(lastValue).toBe('[');
    });
  });

  describe('When it receives an closing character', () => {
    test('Then it should check if the extracted character is the relative opening one and return true if correct', () => {
      const newChecker = new BracketsExpressionChecker();
      const result = newChecker.check('([]]');
      expect(result).toBe(false);
    });
  });

  describe('When it receives string with the correct set of characters', () => {
    test('Then it should return true', () => {
      const newChecker = new BracketsExpressionChecker();
      const positiveResult = newChecker.check('[{}]');
      expect(positiveResult).toBe(true);
    });
  });
});
