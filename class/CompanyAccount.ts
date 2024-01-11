import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): string | void => {
    if (this.validateStatus()) {
      this.setBalance(amount);
      return `Emprestimo no valor de R$ ${amount}, realizado com sucesso! Seu novo saldo é de: R$ ${this.getBalance()}`;
    }
  };
}
