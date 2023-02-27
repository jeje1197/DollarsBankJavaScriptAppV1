const { print, colorPrint, Colors } = require('./src/printing')
runApplication()

// This is the entry point for the application
function runApplication() {
    let applicationRunning = true;
    while (applicationRunning) {
        colorPrint(Colors.Blue, "DOLLARSBANK ATM Welcomes You!!")
        colorPrint(Colors.Blue, "Enter a valid choice:")
        print("1: Open New Account")
        print("2: Transaction")
    }
    
}

