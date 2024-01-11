import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): string | void => {
    if (this.validateStatus()) {
      this.setBalance(amount + 10);
      return `Deposito no valor de R$ ${amount} + R$ 10 de bônus, realizado com sucesso! Seu novo saldo é de: R$ ${this.getBalance()}`;
    }
  };
}
