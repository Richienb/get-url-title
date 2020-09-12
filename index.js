"use strict"

const isUrl = require("is-url-superb")
const metascraper = require("metascraper")([
	require("metascraper-title")()
])
const ky = require("ky-universal").create({
	throwHttpErrors: false
})

module.exports = async url => {
	if (!isUrl(url)) {
		throw new TypeError("A valid url must be provided!")
	}

	const { title } = await metascraper({
		html: await ky(url).text(),
		url
	})

	return title
}
