const test = require("ava")
const getUrlTitle = require(".")

test("main", async t => {
	t.is(await getUrlTitle("https://google.com"), "Google")

	t.is(await getUrlTitle("https://example.com"), "Example Domain")
})
