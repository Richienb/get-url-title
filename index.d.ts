/**
Get the title of a URL.
@param url The url to get the title for.
@example
```
const getUrlTitle = require("get-url-title")

await getUrlTitle("https://google.com")
//=> 'Google'

await getUrlTitle("https://example.com")
//=> 'Example Domain'
```
*/
declare function getUrlTitle(url: string): Promise<string>

export = getUrlTitle
