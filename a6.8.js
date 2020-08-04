
value_percent = 5;
function progressBar() {
	if (value_percent >= 100) {
		$("#my-progress-bar").width(100 + '%');
		$("#my-progress-bar").text(100 + '%');
	}
	else {
		$("#my-progress-bar").width(value_percent + '%');
		$("#my-progress-bar").text(value_percent + '%');
	}
};

progressBar();

$('.j-first').click(() => {
	value_percent = value_percent + 1;
	progressBar();
});

$('.j-second').click(() => {
	value_percent = value_percent + 3;
	progressBar();
});

$('.j-third').click(() => {
	value_percent = value_percent + 7;
	progressBar();
});





