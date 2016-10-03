const GetMidnightDate = require('get-midnight-date');
const GetNextDate = require('get-next-date');

function GetDatesUntil(endDate, startDate) {

  if (endDate === undefined) {
    throw new Error('End date must be supplied.')
  }

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
