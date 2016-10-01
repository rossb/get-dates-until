# get-dates-until

Takes a Date object and returns an array of Date objects representing the calendar days until that date.

## Install

```sh
$ npm install get-dates-until --save
```

## Usage

```js
const GetDatesUntil = require('get-dates-until');

let theYear2525 = new Date(2525, 0, 1);
let daysToGo = GetDatesUntil(theYear2525);
// Array of objects representing every day from now until the year 2525
```
