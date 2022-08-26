/* to create object using class
CLASS contains both properties and methods */

class emp{}
console.log(new emp());
console.log(new emp());

/* example1 */
class Account{
    min_bal=500;
    Open_Account(){
        console.log("Account opened successfully");
    }
    deposit_Amount(){
        console.log("Amount deposited");
    }
    withdrawl(){
        console.log("No Amount");
    }
    get_bal(){
        console.log("100");
    }
    get_statement(){
        console.log("Wiat for a moment");
    }
    close_Account(){
        console.log("Account closed");
    }
}
let a1=new Account();
console.log(a1);
console.log(a1.min_bal);
a1.Open_Account();
a1.deposit_Amount();
a1.withdrawl();
a1.get_bal();
a1.get_statement();
a1.close_Account();