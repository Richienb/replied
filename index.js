"use strict"

const replied = (message, { stdout, stdin }) => new Promise(resolve => {
	stdin.setEncoding("utf8")
	stdin.setRawMode(true)

	stdin.once("data", data => {
		resolve(data)
		stdin.setRawMode(false)
		stdin.destroy()
	})

	stdout.write(message)
})

module.exports = async (message, { stdout, stdin } = process) => {
	if (typeof message !== "string") {
		throw new TypeError(`Expected a string, got ${typeof message}`)
	}

	return replied(message, { stdout, stdin })
}
