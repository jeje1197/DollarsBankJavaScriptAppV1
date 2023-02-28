const { print, colorPrint, Colors } = require('./src/printing')
const { DollarsBankAtm } = require('./src/dollarsbank_atm')
const ATM = new DollarsBankAtm()

const { getInt, getYN } = require('./src/option_handler');

runApplication()

// This is the entry point for the application
function runApplication() {
    let applicationRunning = true;

    while (applicationRunning) {
        colorPrint(Colors.Blue, "DOLLARSBANK ATM Welcomes You!!")
        colorPrint(Colors.Blue, "Enter a valid choice:")
        print("1: Open New Account")
        print("2: Transaction")
        print("3: Exit")

        let selectedOption = -1
        try {
            selectedOption = getInt(1, 3)
        } catch (error) {
            colorPrint(Colors.Red, error)
            continue;
        }

        switch(selectedOption) {
            case 1:
                ATM.createNewAccount()
                break;
            case 2:
                if (ATM.login()) {
                    runTransaction()
                    ATM.logout()
                    applicationRunning = false
                }
                break;
            case 3:
                colorPrint(Colors.Yellow, "Please take your card.")
                applicationRunning = false;
                break;
            default:
        }
    }
}

function runTransaction() {
    while (true) {
        colorPrint(Colors.Blue, "Transaction Menu")
        colorPrint(Colors.Blue, "Enter a valid choice:")
        print("1: Check Account Balance")
        print("2: Print Recent Transactions")
        print("3: Update PIN")
        print("4: Withdraw")
        print("5: Deposit")
        print("6: Return")

        let selectedOption = -1
        try {
            selectedOption = getInt(1, 6)
        } catch (error) {
            colorPrint(Colors.Red, error)
            continue;
        }

        switch(selectedOption) {
            case 1:
                ATM.checkAccountBalance()
                break;
            case 2:
                ATM.printTransactions()
                break;
            case 3:
                ATM.updatePIN()
                break;
            case 4:
                ATM.withdrawAmount()
                break;
            case 5:
                ATM.depositAmount()
                break;
            default:
        }

        if (getYN()) {
            continue;
        } else {
            colorPrint(Colors.Yellow, "----- Successfully logged out -----")
            break;
        }
    }
}

