const test = require("ava")
const replied = require(".")

test("main", t => {
	t.is(typeof replied, "function")
})
