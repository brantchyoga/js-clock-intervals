document.addEventListener('DOMContentLoaded', function() {
//code and events below
var second = document.getElementById('second');
var minute = document.getElementById('minute');
var hour = document.getElementById('hour');
var degSecond;
var degMinute;
var degHour;

var trackTime = function() {
	var present = new Date();
	degSecond = present.getSeconds();
	degMinute = present.getMinutes();
	degHour = present.getHours();

	second.style.transform = "rotate(" + degSecond*6 + "deg)";
	minute.style.transform = "rotate(" + degMinute*6 + "deg)";
	
	if (degHour > 12) {
		degHour = degHour - 12;
	}
	hour.style.transform = "rotate(" + (degHour*30) + "deg)";
	// console.log(degHour, degSecond, degMinute);
};


setInterval(trackTime, 1000);
});




