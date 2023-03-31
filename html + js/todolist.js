const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (input.value.trim() === '') {
		alert('Bitte geben Sie eine Aufgabe ein.');
	} else {
		const li = document.createElement('li');
		const span = document.createElement('span');
		span.innerText = input.value;
		const deleteBtn = document.createElement('button');
		deleteBtn.innerText = 'Löschen';
		deleteBtn.addEventListener('click', function() {
			li.remove();
		});
		li.appendChild(span);
		li.appendChild(deleteBtn);
		list.appendChild(li);
		input.value = '';
	}
});
