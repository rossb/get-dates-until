# get-dates-until

GetDatesUntil(endDate[, startDate])

Takes an end date and an (optional) start date, returns an array of Date objects representing the calendar days until the end date.

If no start date is given today will be assumed. If the end date is the same as the start date, or before the start date, an empty array will be returned.

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
