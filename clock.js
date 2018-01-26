document.addEventListener('DOMContentLoaded', function() {
//code and events below

var eachSecond = 6;
var eachMinute = 6;
var eachHour = 6;

var seconds = function() {
	var second = document.getElementById('second');

	second.style.transform = "rotate(" + eachSecond + "deg)";

	eachSecond += 6;
};

var minutes = function() {
	var minute = document.getElementById('minute');

	minute.style.transform = "rotate(" + eachMinute + "deg)";

	eachMinute += 6;
};

var hours = function() {
	var hour = document.getElementById('hour');

	hour.style.transform = "rotate(" + eachHour + "deg)";

	eachHour += 6;
};

var resetSec = function () {
	if (eachSecond === 360) {
	eachSecond = 0;
	console.log(eachSecond);
	}
};

var resetMin = function () {
	if (eachMinute === 360) {
	eachMinute = 0;
	console.log(eachMinute);
	}
};

var resetHour = function () {
	if (eachHour === 360) {
	eachHour = 0;
	console.log(eachHour);
	}
};

setInterval(function() {
	resetSec();
	 seconds();
}, 1000);

setInterval(function() {
	resetMin();
	minutes();
}, 60000);

setInterval(function() {
	resetHour();
	hours();
}, 720000000);

});



