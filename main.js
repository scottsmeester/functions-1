var tripleFive = function() {
	var i;
	for (i = 0; i < 3; i++) {
		console.log("Five!");
	}
}
tripleFive();



var lastLetter1 = function(myStr) {
	var reversed = myStr.split("");
	reversed.reverse();
	console.log(reversed[0]);
}
lastLetter1("goodbye");



var lastLetter2 = function(myStr2) {
	var myStrLen = myStr2.length;
	console.log(myStr2.charAt(myStrLen - 1));
}
lastLetter2("smeester");

var square = function(x) {
	console.log(x * x);
}
square(3);



var negate = function(x) {
	if (x > 0) {
		x = 0 - x;
	}
	console.log(x);
}

negate(70);


var toArray = function(x, y, z) {
	var myArray = [];
	myArray.push(x, y, z);
	console.log(myArray);
}

toArray(4, 7, 8);


var startsWithA = function(myStr) {
	if (myStr.charAt(0) === "A")
		return true;
	else {
		return false;
	}
}

console.log(startsWithA("Aloha"));


var excite = function(myStr) {
	return (myStr + "!!!");
}

console.log(excite("Hello"));


var sun = function(myStr) {
	if (myStr.indexOf("sun") !== -1)
		return true;
	else {
		return false;
	}
}

console.log(sun("ipsum"));


var getSeconds = function(myStr) {
	var myTime = myStr.split(":");
	// myTime.reverse();

	// return myTime[2];

	return (+myTime[2] + (+myTime[1] * 60) + (+myTime[0] * 60 * 60));
}

console.log(getSeconds("1:10:30"))