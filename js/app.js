'use strict';

// let siteVisitor = prompt('What is your name?');

// alert(`Welcome to my site ${siteVisitor}! Guess these facts about me.`);

// let questionOne = prompt('Yes or No...Did I graduate High School in 2005?').toLowerCase();

// if(questionOne === 'y' || questionOne === 'yes'){
//   alert('You are correct!');
//   //console.log(questionOne)
// } else if(questionOne === 'n' || questionOne === 'no'){
//   alert('You are wrong...');
// } else{
//   alert('Answer yes or no')
// }

// let questionTwo = prompt('Was my first job as a Cook?').toLowerCase();

// if (questionTwo === 'y' || questionTwo === 'yes'){
//   alert('Well done! You are good at this!')
//   //console.log(questionTwo)
// } else if(questionTwo === 'n' || questionTwo === 'no'){
//   alert('That is nice of you,..but Wrong!')
// } else {
//   alert('Maybe you just dont care?')
// }

// let questionThree = prompt('Based on my appearance, do you think my hobbies include going to the gym?').toLowerCase();

// if (questionThree === 'y' || questionThree === 'yes'){
//   alert('Gee thanks! I try!')
//   //console.log(questionThree)
// } else if(questionThree === 'n' || questionThree === 'no'){
//   alert('Six-packs are bought at the store...right?')
// } else {
//   alert('I will never be Arnold, but that doesnt mean I dont care?')
// }

// let questionFour = prompt('Would you believe that Underwater Basket Weaving is a skill I look to add to my repertoire?').toLowerCase();

// if (questionFour === 'y' || questionFour === 'yes'){
//   alert('Wow, I must be old if you dont get that joke.')
//   //console.log(questionFour)
// } else if (questionFour === 'n' || questionFour === 'no'){
//   alert ('Good! I would like to think not!')
// } else {
//   alert('Ignoring this is actually the proper response. Well done!')
// }

// let questionFive = prompt('One of my personal goals is to hike the PCT in full, yes or no?').toLowerCase();

// if (questionFive === 'y' || questionFive === 'yes'){
//   alert('Yes, that is correct!')
//   //console.log(questionFive)
// } else if (questionFive === 'n' || questionFive === 'no'){
//   alert ('It would be dificult, but I think I could get it done')
// } else {
//   alert ('Have any suggestions?')
// }

let myNum = 21;

let userGuess = prompt('Guess what number I\'m thinking of');

while(userGuess < myNum){
  userGuess = prompt('Too low');
} else if (userGuess > myNum){
  userGuess = prompt ('Too high!');
} else {
  userGuess = prompt ('Great Job!')
}

//Credit to Brian Tittl: href="https://www.youtube.com/watch?v=cmIL1iRCM_I"
// var computerNumber = Math.floor(Math.random()*20)+1;
// var numTurns = 0;
// var hasWon = false;

// while (userNumber != computerNumber && numTurns < 4){
//   numTurns++;
//   var userNumber = prompt('Turn ' + numTurns + ': Can you guess my number?');

//   if (userNumber == computerNumber){
//     alert('You got it right!')
//     hasWon = true;
//   }
//   else if (computerNumber > userNumber){
//     alert('Too low!');
//   }
//   else if (computerNumber < userNumber){
//     alert('Too high!');
//   }
//   else {
//     alert('that is not a number...')
//   }
// }

// if (hasWon == true){
//   alert("Congratulations! You won!")
// } else if (hasWon == false){
//   alert("Sorry....better luck next time...")
// }

// let questionSeven = prompt('Can you find the suspect?')
// let suspects = ['Billy', 'Meagan', 'Tanner', 'Zane', 'Queeney', 'Sam', 'Alex', 'Charlie', 'Dotty', 'Frank', 'Elvis', 'Hank', 'Riley', 'Sara', 'Tyler', 'Garret', 'Ike', 'Ashley', 'Lucas', 'Paul', 'Sophia', 'Jen', 'Nikki', 'Zoe']

// for(let i = 0; i < suspects.length; i++){
//   if(suspects[i] === 'Zane'){
//     console.log('Yes, you found the suspect we\'re looking for!');
//   } else {
//     console.log('Sorry, this is not the suspect we are looking for.');
//   }
// }

// function getRandomSuspect(){
//   let randomIdx = Math.floor(Math.random()* suspects.length);
//   let randomSuspect = suspect[randomIdx];
//   return randomSuspect;
// }

// let clueGuesses = 6;
// let suspect = 'Zane';
// let foundSuspect = false;

// while(clueGuesses && !foundSuspect){
//   let consoleGuess = getRandomSuspect();
//   console.log(`It was ${consoleGuess}, in remo with the candlestick! Guesses: ${clueGuesses}`);
//   clueGuesses--;
//   if(consoleGuess === suspect){
//     foundSuspect= true;
//   }
// }