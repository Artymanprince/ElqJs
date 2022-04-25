/*It's required that I use the length property*/
for(let hash = "#"; hash.length < 8; hash += "#"){
	console.log(hash)
}

//Another way to solve the problem?
let hash = "#";
for(let num = 0; num < 7; num++){
	console.log(hash);
	hash += "#"
}
