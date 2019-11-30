/**
 * A Uniform Resource Locator (URL). See [URL - Wikipedia](https://en.wikipedia.org/wiki/URL).
*/
declare type url = string

/**
 * Get the title of a URL.
 * @param url The URL to process.
 * @example
 * ```
 * const getURLTitle = require("get-url-title");
 *
 * (async () => {
 *     await getURLTitle("https://google.com");
 *     //=> 'Google'
 *
 *     await getURLTitle("https://example.com");
 *     //=> 'Example Domain'
 * })();
 * ```
*/
declare function getURLTitle(url: url): string;

export = getURLTitle;
