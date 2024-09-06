const response = document.getElementById("response");
/*clet userName = document.getElementById("username");

userName ? console.log(`Hello, ${userName}!`): 
console.log('Hello!');

onst userQuestion = document.getElementById('question');

console.log(`${userName} asked: ${userQuestion}`);*/

let randomNumber = Math.floor(Math.random() * 9);

let magicConch = '';

switch (randomNumber) {

  case 0:
    magicConch = 'It is certain';
    break

  case 1:
    magicConch = 'It is decidedly so';
    break

  case 2:
    magicConch = 'Reply hazy try again';
    break

  case 3:
    magicConch = 'Cannot predict now';
    break

  case 4:
    magicConch = 'Do not count on it';
    break

  case 5:
    magicConch = 'My sources say no';
    break

  case 6:
    magicConch = 'Outlook not so good';
    break

  case 7:
    magicConch = 'Signs point to yes';
    break

  case 5:
    magicConch = 'My sources say no';
    break

  case 6:
    magicConch = 'Outlook not so good';
    break

  case 7:
    magicConch = 'Signs point to yes';
    break

  case 8:
    magicConch = 'No <3';
    break
}

response.innerHTML = (`The Magic Conch says: <br/> ${magicConch}`);




