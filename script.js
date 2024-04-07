function makeid(l) {
  // write your code here
	let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let Length = characters.length;
    for ( let i = 0; i < l; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * Length));
    }
    return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
