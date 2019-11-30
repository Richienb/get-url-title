# Get URL Title [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/get-url-title/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/get-url-title)

Get the title of a URL.

[![NPM Badge](https://nodei.co/npm/get-url-title.png)](https://npmjs.com/package/get-url-title)

## Install

```sh
npm install get-url-title
```

## Usage

```js
const getURLTitle = require("get-url-title");

(async () => {
    await getURLTitle("https://google.com");
    //=> 'Google'

    await getURLTitle("https://example.com");
    //=> 'Example Domain'
})();
```

## API

### getURLTitle(url)

#### url

Type: `string (url)`

The URL to process.
