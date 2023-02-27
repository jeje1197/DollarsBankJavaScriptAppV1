const { setColor, Colors } = require('./printing')

const prompt = require('prompt-sync')({sigint: true})

const getInt = (min, max) => {
    setColor(Colors.Green)
    const value = prompt("")
    const error = undefined
    if (!value.match(/[0-9]*/)) {
        error = `Expected integer value between values ${min} and ${max}`
    }
    return (value, error)
}

const getDouble = (min, max) => {
    const value = prompt("")
    const error = undefined
    if (!value.match(/[0-9]*/)) {
        error = `Expected decimal value between values ${min} and ${max}`
    }
    return (value, error)
}

module.exports = {
    getInt, getDouble
}