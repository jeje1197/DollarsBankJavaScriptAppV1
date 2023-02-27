const { print, colorPrint, Colors } = require('./src/printing')
const { DollarsBankAtm } = require('./src/dollarsbank_atm')
const ATM = new DollarsBankAtm()

const { getInt } = require('./src/option_handler');

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
                ATM.login()
                break;
            case 3:
                print("----- Exiting Account -----")
                applicationRunning = false;
                break;
            default:

        }
    }
    
}

