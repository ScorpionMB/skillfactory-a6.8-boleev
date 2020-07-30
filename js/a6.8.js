
value_percent = 5;
function progressBar() {
	$("#my-progress-bar").width(value_percent + '%');
	$("#my-progress-bar").text(value_percent + '%');
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


