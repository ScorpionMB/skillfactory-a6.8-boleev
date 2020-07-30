
value_percent = 5;
$("#my-progress-bar").width(value_percent + '%');
$("#my-progress-bar").text(value_percent + '%');

const btnFirst = $('.j-first');

btnFirst.click(() => {
	value_percent = value_percent + 1;
	$("#my-progress-bar").width(value_percent + '%');
  $("#my-progress-bar").text(value_percent + '%');
});

const btnSecond = $('.j-second');

btnSecond.click(() => {
	value_percent = value_percent + 3;
	$("#my-progress-bar").width(value_percent + '%');
  $("#my-progress-bar").text(value_percent + '%');
});

const btnThird = $('.j-third');

btnThird.click(() => {
	value_percent = value_percent + 7;
	$("#my-progress-bar").width(value_percent + '%');
  $("#my-progress-bar").text(value_percent + '%');
});


