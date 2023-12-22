// script.js 
function generate() { 
	
	const length = document.querySelector( 
		'input[type="range"]').value; 

	if (length < 1) { 
		return; 
	} 

    let digit = "0123456789"

	let password = ""; 
	for (let i = 0; i < length; i++) { 
		const pos = digit[Math.floor(Math.random() * 10)]; 
		password += pos; 
	} 

	document.querySelector( 
		'input[type="text"]').value = password; 
} 

[ 
	...document.querySelectorAll( 
		'input[type="checkbox"], button.generate'), 
].forEach((elem) => { 
	elem.addEventListener("click", generate); 
}); 

document.querySelector('input[type="range"]').addEventListener( 
	"input", (e) => { 
		document.querySelector( 
			"div.range span").innerHTML = e.target.value; 
	}); 

document.querySelector("div.password button").addEventListener( 
	"click", () => { 
		const pass = document.querySelector('input[type="text"]').value; 
		navigator.clipboard.writeText(pass).then(() => { 
			document.querySelector( 
				"div.password button").innerHTML = "copied!"; 
			setTimeout(() => { 
				document.querySelector( 
					"div.password button").innerHTML = "copy"; 
			}, 1000); 
		}); 
	}); 


