# fetch-public-google-sheet

Single-purpose module to get data from an unprotected google sheet without an API key.

It will use the top and left column for keys in the form of `{[column]: {[row]: cell}}`

```js
const fetchSheet = require('fetch-public-google-sheet')
const data = fetchSheet('https://docs.google.com/spreadsheets/d/.../edit')
```
