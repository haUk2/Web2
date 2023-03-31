
function generateRandom() {
			var lower = parseInt(document.getElementById("lower").value);
			var upper = parseInt(document.getElementById("upper").value);
			var randomNum = Math.floor(Math.random() * (upper - lower + 1)) + lower;
			document.getElementById("result").innerHTML = "Die zufällige Zahl ist: " + randomNum;
}
	