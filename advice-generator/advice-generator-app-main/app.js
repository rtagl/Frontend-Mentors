let quoteBtn = document.querySelector('.getQuoteBtn');
let quoteEl = document.querySelector('.quote');
let adviceId = document.querySelector('.adviceId');

function fetchAdvice() {
	fetch('https://api.adviceslip.com/advice')
		.then((res) => res.json())
		.then((data) => {
			adviceId.innerHTML = `ADVICE #${data.slip.id}`;
			quoteEl.innerHTML = `"${data.slip.advice}"`;
			console.log(data);
		});
}

window.addEventListener('load', () => {
	fetchAdvice();
});

quoteBtn.addEventListener('click', () => {
	fetchAdvice();
});
