const questions = document.querySelectorAll('.question');
const icons = document.querySelectorAll('.icon');

console.log(questions);

for (let i = 0; i < questions.length; i++) {
	questions[i].addEventListener('click', function () {
		questions[i].classList.toggle('active');
		console.log(questions);

		const icon = questions[i].lastElementChild;
		const answer = questions[i].nextElementSibling;
		if (answer.style.display === 'block') {
			answer.style.display = 'none';
			icon.src = './assets/images/icon-plus.svg';
		} else {
			answer.style.display = 'block';
			icon.src = './assets/images/icon-minus.svg';
		}
	});
}
