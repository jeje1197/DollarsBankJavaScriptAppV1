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

        const selectedOption = getInt(1, 3)
        switch(selectedOption) {
            case 1:
                print("----- Creating Account -----")
                
            case 2:
                print("----- Log in to Account -----")
            case 3:
                print("----- Exiting Account -----")
                applicationRunning = false;
            default:
        }
    }
    
}

