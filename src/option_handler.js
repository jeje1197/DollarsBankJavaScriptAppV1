const { setColor, Colors } = require('./printing')

const prompt = require('prompt-sync')({sigint: true})

const getInt = (min, max) => {
    const value = prompt(Colors.Green)
    setColor(Colors.Reset)
    if (!value.trim().match(/^[0-9]*$/) || value < min || value > max) {
        throw `Expected integer value between ${min} and ${max}`
    }
    return Number(value)
}

const getPin = () => {
    const value = prompt(Colors.Green)
    setColor(Colors.Reset)
    if (!value.trim().match(/^[0-9]{4}$/)) {
        throw `Expected 4-digit number in format xxxx`
    }
    return Number(value)
}

const getDouble = (min, max) => {
    const value = prompt(Colors.Green + "$")
    setColor(Colors.Reset)
    if (!value.trim().match(/^[0-9]+(.[0-9]+)?$/) || value < min || value > max) {
        throw `Expected decimal value between ${min} and ${max}`
    }
    return Number(value)
}

module.exports = {
    getInt, getDouble, getPin
}