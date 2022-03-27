const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter your username", function(input){
	usertokens = input.split(' ');
	
usernameinput = String(usertokens[1]);


if (usernameinput.length<10){
console.log('Please enter a username up to ten with no spaces')
reader.close()
}
else if(usernameinput.length>=10){
    reader.question(`Welcome ${usernameinput} Please enter a password with no spaces`,function(passinput){

passtokens = passinput.split(' ');
	
passwordinput = String(passtokens[1]);

if(passinput.length<10){
    console.log('Please enter a pass word up to 10 with no spaces')
    reader.close()
}
else if(passinput.length>=10){
console.log('Thank you have a nice day')
reader.close()
}
    });
}



	
});