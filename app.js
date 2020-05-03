// cross-site scripting attacks (xss)
const input = document.getElementById('xss-input');
const button = document.getElementById('xss-button');
const content = document.getElementById('xss-wrapper');

button.addEventListener('click', () => {
	const value = input.value;
	content.innerHTML = value;
});
