import test from "ava"
import getURLTitle from "."

test("main", async (t) => {
    t.is(await getURLTitle("https://google.com"), "Google")

    t.is(await getURLTitle("https://example.com"), "Example Domain")
})
