"use strict"

const metascraper = require("metascraper")([
    require("metascraper-title")(),
])
const ky = require("ky-universal")

module.exports = async (url) => (await metascraper({
    html: await ky(url).text(),
    url,
})).title
