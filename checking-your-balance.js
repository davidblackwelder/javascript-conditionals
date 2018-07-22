/*
 * Programming Quiz - Checking Your Balance (3-5)

 	Use a provided flowchart to write the code to represent checking your balance at the ATM.
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
let balance = -10.00;
let checkBalance = true;
let isActive = true;

// your code goes here
if (checkBalance && isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (checkBalance && isActive !== true) {
    console.log("Your account is no longer active.");    
} else if (checkBalance && isActive && balance === 0) {
    console.log("Your account is empty.");
} else if (checkBalance && isActive && balance < 0) {
    console.log("Your balance is negative. Please contact bank.");
} else
    console.log("Thank you. Have a nice day!");