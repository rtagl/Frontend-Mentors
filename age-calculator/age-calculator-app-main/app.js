const form = document.getElementById('formId');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	calculateAge();
});

function calculateAge() {
	console.log('hello world');
	const month = document.getElementById('month').value;
	const day = document.getElementById('day').value;
	const year = document.getElementById('year').value;

	const birthDate = new Date(year, month - 1, day);
	const currentDate = new Date();

	let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
	let ageMonths = currentDate.getMonth() - birthDate.getMonth();
	let ageDays = currentDate.getDate() - birthDate.getDate();

	if (ageDays < 0) {
		// Reduce months by one and calculate days based on the previous month
		ageMonths--;
		const daysInPreviousMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			0
		).getDate();
		ageDays += daysInPreviousMonth;
	}
	if (ageMonths < 0) {
		// Reduce years by one and adjust months
		ageYears--;
		ageMonths += 12;
	}

	document.getElementById('year-value').innerText = ageYears;
	document.getElementById('months-value').innerText = ageMonths;

	document.getElementById('days-value').innerText = ageDays;

	console.log(birthDate, currentDate, ageYears, ageMonths, ageDays);
}
