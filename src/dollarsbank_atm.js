const { Account } = require("./customer_account")
const { getInt, getDouble, getPin } = require("./option_handler")
const { Colors, colorPrint } = require("./printing")

class DollarsBankAtm {
    constructor() {
        this.listOfAccounts = []
        this.currentAccount = undefined
    }

    createNewAccount() {
        colorPrint(Colors.Blue, "----- Creating Account -----")
        colorPrint(Colors.Blue, "Enter initial deposit amount in format xx.xx")
        let initialDeposit = 0;
        try {
            getDouble(0, 100000)
        } catch (error) {
            colorPrint(Colors.Red, error + " Try again!")
            return
        }

        colorPrint(Colors.Blue, "Enter 4-digit secure PIN number: ")
        let securePin = 0;
        try {
            securePin = getPin(0, 100000)
        } catch (error) {
            colorPrint(Colors.Red, error + " Try again!")
            return
        }

        colorPrint(Colors.Blue, "Verify PIN number: ")
        let verifiedPin = 0;
        try {
            verifiedPin = getInt(0, 100000)
        } catch (error) {
            colorPrint(Colors.Red, error + " Try again!")
            return
        }

        if (securePin !== verifiedPin) {
            colorPrint(Colors.Red, "PIN numbers do not match.")
            return
        }

        const account = new Account(initialDeposit, securePin)
        account.addTransaction(`Deposited $${initialDeposit} into account`)
        this.listOfAccounts.push(account)
        colorPrint(Colors.Yellow, "Account Created!!!")
    }

    login() {
        colorPrint(Colors.Blue, "----- Log in to Account -----")
        colorPrint(Colors.Blue, "Enter PIN number: ")
        let enteredPin = -1
        try {
            enteredPin = getPin()
        } catch (error) {
            colorPrint(Colors.Red, "Invalid account number or PIN.")
            return
        }

        for (let i = 0; i < this.listOfAccounts.length; i++) {
            if (enteredPin === this.listOfAccounts[i].getPin()) {
                this.currentAccount = this.listOfAccounts[i]
                colorPrint(Colors.Red, "Successfully logged in!")
                return
            }
        }

        colorPrint(Colors.Yellow, "Invalid account number or PIN.")
    }

    logout() {
        this.currentAccount = undefined
        colorPrint(Colors.Yellow, "Successfully logged out!")
    }

    checkAccountBalance() {
        print(`Your current balance is: $${this.currentAccount.getBalance()}`)
    }

    printTransactions() {
        this.currentAccount.printTransactions()
    }

    updatePIN() {

    }

    withdrawAmount() {

    }

    depositAmount() {

    }
}

module.exports = {
    DollarsBankAtm
}