const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter your username", function(input){
	usertokens = input.split(' ');
	
usernameinput = String(usertokens[1]);


if (usernameinput.length<10){
console.log('Please enter a username up to ten')
reader.close()
}
else if(usernameinput.length>=10){
    reader.question(`Welcome ${usernameinput} Please enter a password`,function(passinput){

passtokens = passinput.split(' ');
	
passwordinput = String(passtokens[1]);

if(passinput.length<10){
    console.log('Please enter a pass up to 10')
    reader.close()
}
else if(passinput.length>=10){
console.log('Thank you have a nice day')
reader.close()
}
    });
}



	
});