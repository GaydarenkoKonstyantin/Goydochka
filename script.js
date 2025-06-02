
let indecator = document.getElementById("nof");
let disp = document.getElementById("img");
let val = 1;
let cnf = confirm("Вы отказываетесь от отвецтвенности?")

if (cnf === false) {

	window.location.href = "in2.html";
}

function hz() {

	window.location.href = "https://www.youtube.com/@%D0%AF%D0%BD%D0%B5%D0%BC%D0%B8%D0%BB%D0%BE%D1%8F%D1%88%D0%B0%D0%BC%D0%BF%D1%83%D0%BD%D1%8C";
}

function update() {
indecator.innerText = val + " of 3";
if (val === 1) {
	disp.src = "img0.jpg";
}
if (val === 2) {
	disp.src = "img1.jpg";
}
if (val === 3) {
	disp.src = "gmn.gif";
}
}
function next() {
	if (val < 3) {val += 1;
	update();}
	
}

function back() {
	if (val > 1) {val -= 1;
	update();}
}


function secret() {
	disp.src = "mga.gif"
}
update();