class Account {
  amount: number;
  balance: number;
  date: string;

  constructor() {
    this.amount = 0;
    this.balance = 1000;
    this.date = new Date().toLocaleDateString('en-GB');
  }

  public deposit(amount: number) {
    this.balance += amount;
  }

  public withdraw(amount: number) {
    this.balance -= amount;
  }
}

export default Account;
