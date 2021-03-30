# fetch-public-google-sheet

Small module to get data from an unprotected google sheet without an API key.

It will use the top and left column for keys in the form of `{[row]: {[column]: cell}}`.

```js
const fetchSheet = require("fetch-public-google-sheet");
const data = fetchSheet("https://docs.google.com/spreadsheets/d/.../edit");
```

You can also return the data in `{[column]: {[row]: cell}}` with

```js
const data = fetchSheet("https://docs.google.com/spreadsheets/d/.../edit", {
  indexBy: "column",
}); 
```

Caution: The module doesn't work properly if you use numbers in your spreadsheet. Also it might break anytime, since it's using an undocumented Google Api.

## Acknowledgments

The hard parts of this module are stoled from [cuba](https://www.npmjs.com/package/cuba by) [yuanqing](https://github.com/yuanqing). Check it out for more complex use cases. I didn't use it as a dependency because I also fixed [an issue with empty cells](https://github.com/yuanqing/cuba/issues/6).

## Set up your Google Sheet to work

![image](https://user-images.githubusercontent.com/841788/113042350-5e1f4c80-919b-11eb-8459-1b1cc5bf30d2.png)
![image](https://user-images.githubusercontent.com/841788/113042392-6e372c00-919b-11eb-9d15-63a564547537.png)
![image](https://user-images.githubusercontent.com/841788/113042421-77c09400-919b-11eb-89de-9c49c2abf1d7.png)
Copy the link and you are good to go

