export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = (amount: number): string | void => {
    if (this.validateStatus()) {
      this.balance += amount;
      return `Deposito no valor de R$ ${amount}, realizado com sucesso! Seu novo saldo é de: R$ ${this.balance}`;
    }
  };

  withdraw = (amount: number): string | void => {
    if (this.validateStatus()) {
      if (this.validateBalanceAmount(amount)) {
        this.balance -= amount;
        return `Saque no valor de R$ ${amount}, realizado com sucesso! Seu novo saldo é de: R$ ${this.balance}`;
      }
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  protected setBalance = (amount: number): void => {
    this.balance += amount;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  private validateBalanceAmount = (amount: number): boolean => {
    if (this.balance >= amount) {
      return true;
    }

    throw new Error("Saldo insuficiente");
  };
}
