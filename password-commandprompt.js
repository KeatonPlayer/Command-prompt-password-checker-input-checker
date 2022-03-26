const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter your password", function(input){
	tokens = input.split(' ');
	
password = tokens[0];
passinput = String(tokens[1]);


if (passinput.length<10){
console.log('Please enter a password up to ten')
}
else if(passinput.length>=10){
     console.log('Thank you for entering your password')
}


	// This line closes the connection to the command line interface.
	reader.close()
});
