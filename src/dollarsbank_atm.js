const { Account } = require("./customer_account")
const { getDouble, getPin } = require("./option_handler")
const { Colors, colorPrint, print } = require("./printing")

class DollarsBankAtm {
    constructor() {
        this.listOfAccounts = []
        this.currentAccount = undefined
    }

    createNewAccount() {
        colorPrint(Colors.Blue, "----- Create Account -----")
        colorPrint(Colors.Blue, "Enter initial deposit amount in format $xx.xx")
        let initialDeposit = 0;
        try {
            initialDeposit = getDouble(0, 100000)
        } catch (error) {
            colorPrint(Colors.Red, error + " Try again!\n")
            return
        }

        colorPrint(Colors.Blue, "Enter 4-digit secure PIN number: ")
        let securePin = 0;
        try {
            securePin = getPin()
        } catch (error) {
            colorPrint(Colors.Red, "Incorrect format for pin. Try again!\n")
            return
        }

        colorPrint(Colors.Blue, "Verify PIN number: ")
        let verifiedPin = 0;
        try {
            verifiedPin = getPin()
        } catch (error) {
            colorPrint(Colors.Red, "Incorrect format for pin. Try again!\n")
            return
        }

        if (securePin !== verifiedPin) {
            colorPrint(Colors.Red, "PIN numbers do not match.\n")
            return
        }

        const account = new Account(initialDeposit, securePin)
        account.addTransaction(`Deposited $${initialDeposit} into account`)
        this.listOfAccounts.push(account)
        colorPrint(Colors.Yellow, "Account Created!!!\n")
    }

    login() {
        colorPrint(Colors.Blue, "----- Log in to Account -----")
        colorPrint(Colors.Blue, "Enter PIN number: ")
        let enteredPin = -1
        try {
            enteredPin = getPin()
        } catch (error) {
            colorPrint(Colors.Red, "Invalid PIN.\n")
            return false
        }

        for (let i = 0; i < this.listOfAccounts.length; i++) {
            if (enteredPin === this.listOfAccounts[i].getPin()) {
                this.currentAccount = this.listOfAccounts[i]
                colorPrint(Colors.Yellow, "Successfully logged in!\n")
                return true
            }
        }
        colorPrint(Colors.Red, "Invalid PIN.\n")
        return false
    }

    logout() {
        this.currentAccount = undefined
        colorPrint(Colors.Yellow, "Please take your card.")
    }

    checkAccountBalance() {
        colorPrint(Colors.Blue, "----- Account Balance -----")
        print(`Your current balance is: $${this.currentAccount.getBalance()}\n`)
    }

    printTransactions() {
        this.currentAccount.printTransactions()
    }

    updatePIN() {
        colorPrint(Colors.Blue, "----- Log in to Account -----")
        colorPrint(Colors.Blue, "Enter current PIN number: ")
        let enteredPin = -1
        try {
            enteredPin = getPin()
            if (enteredPin !== this.currentAccount.getPin()) {
                throw 'Invalid PIN'
            }
        } catch (error) {
            colorPrint(Colors.Red, error + "\n")
            return
        }

        colorPrint(Colors.Blue, "Enter new PIN number: ")
        let newPin = -1
        try {
            newPin = getPin()
        } catch (error) {
            colorPrint(Colors.Red, "Incorrect format for PIN.\n")
            return
        }

        this.currentAccount.setPin(newPin)
    }

    withdrawAmount() {
        colorPrint(Colors.Blue, "----- Withdraw Amount -----")
        colorPrint(Colors.Blue, "Enter amount to withdraw in format xx.xx")

        let withdrawAmount = 0;
        try {
            withdrawAmount = getDouble(0, this.currentAccount.getBalance())
        } catch (error) {
            colorPrint(Colors.Red, error + " Try again!\n")
            return
        }

        this.currentAccount.setBalance(this.currentAccount.getBalance() - withdrawAmount)
        this.currentAccount.addTransaction(`Withdrew $${withdrawAmount}`)
        colorPrint(Colors.Yellow, `Successfully withdrew $${withdrawAmount}` )
        print(`Your new balance is: $${this.currentAccount.getBalance()}\n`)
    }

    depositAmount() {
        colorPrint(Colors.Blue, "----- Deposit Amount -----")
        colorPrint(Colors.Blue, "Enter amount to deposit in format xx.xx")

        let depositAmount = 0;
        try {
            depositAmount = getDouble(0, 1000000)
        } catch (error) {
            colorPrint(Colors.Red, error + " Try again!\n")
            return
        }

        this.currentAccount.setBalance(this.currentAccount.getBalance() + depositAmount)
        this.currentAccount.addTransaction(`Deposited $${depositAmount}`)
        colorPrint(Colors.Yellow, `Successfully deposited $${depositAmount}`)
        print(`Your new balance is: $${this.currentAccount.getBalance()}\n`)
    }
}

module.exports = {
    DollarsBankAtm
}