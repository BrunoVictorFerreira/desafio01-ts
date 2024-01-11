import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PremiumAccount } from "./class/PremiumAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
  99999999999,
  "Bruno Victor",
  1
);
console.log(peopleAccount.deposit(1000));
console.log(peopleAccount.withdraw(900));
console.log("=====================");
const companyAccount: CompanyAccount = new CompanyAccount("BV Tecnologia", 2);
console.log(companyAccount.deposit(1000));
console.log(companyAccount.withdraw(900));
console.log(companyAccount.getLoan(1000));
console.log("=====================");
const premiumAccount: PremiumAccount = new PremiumAccount("Bruno Premium", 3);
console.log(premiumAccount.deposit(1000));
console.log(premiumAccount.withdraw(900));
