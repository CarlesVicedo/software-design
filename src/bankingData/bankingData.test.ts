import Account from './bankingData';

describe('Given a Account class', () => {
  describe('When a new deposit is done', () => {
    test('Then the balance should be updated', () => {
      const account = new Account();
      account.deposit(100);
      expect(account.balance).toBe(1100);
    });
  });

  describe('When a new withdraw is done', () => {
    test('Then the balance should be updated', () => {
      const account = new Account();
      account.withdraw(100);
      expect(account.balance).toBe(900);
    });
  });

  describe('When printStatement is called', () => {
    test('Then a log should be printed in console', () => {
      const account = new Account();
      const printStatementSpy = jest.spyOn(console, 'log');
      account.printStatement();
      expect(printStatementSpy).toHaveBeenCalled();
    });
  });
});
