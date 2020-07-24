const replied = require(".")

const ESC = "\u001B["

module.exports = (async () => {
	console.log(`Result: ${JSON.stringify(await replied(ESC + "0c"))}`)
})()
