class Account {
    constructor(balance, pin) {
        this.accountNumber = Math.floor(Math.random() * 100000);
        this.balance = balance
        this.pin = pin
        this.transactions = []
    }

    getAccountNumber() {
        return this.accountNumber
    }

    getBalance() {
        return this.balance
    }

    setBalance(balance) {
        this.balance = balance
    }

    getPin() {
        return this.pin
    }

    setPin(pin) {
        this.pin = pin
    }

    getTransactions() {
        return this.transactions
    }

    addTransaction(message) {
        this.transactions.push(`[${hashCode(new String(this.accountNumber))}]` + message + " on " + new Date())
    }

    printTransactions() {
        for (let i = 0; i < 5 && i < this.transactions.length; i++) {
            console.log(this.transactions[this.transactions.length - 1 - i])
        }
    }
}

function hashCode(s) {
    let h = 0;
    for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;

    return h;
}

module.exports = {
    Account
}