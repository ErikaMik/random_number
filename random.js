console.log('Random number app');
var cell_number = 1;

function cell_random() {
	cell_clear();
	cell_number = Math.ceil(Math.random()*9);
	console.log(cell_number);
	document.getElementById('box_' + cell_number).style.backgroundColor = 'red';
}

function cell_next() {
	cell_clear();
	if (cell_number == 9) {
		cell_number = 0;
	}
	cell_number++;
	console.log(cell_number);
	document.getElementById('box_' + cell_number).style.backgroundColor = 'red';
}

function cell_clear() {
	for (var index = 1; index <= 9; index++) {
		document.getElementById('box_' + index).style.backgroundColor = 'gray';
	}
}