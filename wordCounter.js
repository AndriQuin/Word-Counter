var result = document.getElementById("result");

function countWord() {
	let words = document.getElementById("givenText").value.split(" ");
	if (words[0] == "" && words.length == 1) {
		result.innerHTML = "Word Counted: 0" ;
	}
	else {
		result.innerHTML = "Words Counted: "  + words.length;
	}
}