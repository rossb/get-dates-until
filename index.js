const GetMidnightDate = require('./GetMidnightDate.js');
const GetNextDate = require('./GetNextDate.js');

function GetDatesUntil(endDate, startDate) {

	let datesUntil = [];

	let startDateObj = (startDate === undefined)
		? GetMidnightDate(new Date())
		: GetMidnightDate(startDate);

	let endDateObj = GetMidnightDate(endDate);

	if (endDateObj <= startDateObj) return [];

	do {

		datesUntil.push(
			GetNextDate( datesUntil[datesUntil.length - 1] || startDateObj )
		);

	} while ( datesUntil[datesUntil.length - 1].toDateString() !== endDateObj.toDateString() );

	return datesUntil;

}

module.exports = GetDatesUntil;
