# fetch-public-google-sheet

Single-purpose module to get data from an unprotected google sheet without an API key.

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

Caution: The function doesn't work properly if you use numbers in your spreadsheet.

## Set up your Google Sheet

![image](https://user-images.githubusercontent.com/841788/113042350-5e1f4c80-919b-11eb-8459-1b1cc5bf30d2.png)
![image](https://user-images.githubusercontent.com/841788/113042392-6e372c00-919b-11eb-9d15-63a564547537.png)
![image](https://user-images.githubusercontent.com/841788/113042421-77c09400-919b-11eb-89de-9c49c2abf1d7.png)
Copy the link and you are good to go
