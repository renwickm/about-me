'use strict';

let score = 0;

// GREETING
let siteVisitor = prompt('What is your name?');

alert(`Welcome to my site ${siteVisitor}! Guess these facts about me.`);

// QUESTION #1
let questionOne = prompt('Yes or No...Did I graduate High School in 2005?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes'){
  alert('You are correct!');
  score++;
  //console.log(questionOne)
} else if(questionOne === 'n' || questionOne === 'no'){
  alert('You are wrong...');
} else{
  alert('Answer yes or no')
}

// QUESTION #2
let questionTwo = prompt('Was my first job as a Cook?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes'){
  alert('Well done! You are good at this!')
  score++;
  //console.log(questionTwo)
} else if(questionTwo === 'n' || questionTwo === 'no'){
  alert('That is nice of you,..but Wrong!')
} else {
  alert('Maybe you just dont care?')
}

// QUESTION #3
let questionThree = prompt('Based on my appearance, do you think my hobbies include going to the gym?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes'){
  alert('Gee thanks! I try!')
  score++;
  //console.log(questionThree)
} else if(questionThree === 'n' || questionThree === 'no'){
  alert('Six-packs are bought at the store...right?')
} else {
  alert('I will never be Arnold, but that doesnt mean I dont care?')
}

// QUESTION #4
let questionFour = prompt('Would you believe that Underwater Basket Weaving is a skill I look to add to my repertoire?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes'){
  alert('Wow, I must be old if you dont get that joke.')
  //console.log(questionFour)
} else if (questionFour === 'n' || questionFour === 'no'){
  alert ('Good! I would like to think not!')
  score++;
} else {
  alert('Ignoring this is actually the proper response. Well done!')
}

// QUESTION #5
let questionFive = prompt('One of my personal goals is to hike the PCT in full, yes or no?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes'){
  alert('Yes, that is correct!')
  score++;
  //console.log(questionFive)
} else if (questionFive === 'n' || questionFive === 'no'){
  alert ('It would be dificult, but I think I could get it done')
} else {
  alert ('Have any suggestions?')
}



// ADDITIONAL NOTES
// // let userGuess = prompt('Guess what number I\'m thinking of');

// // if(userGuess > myNum){
  // //   alert('Too high');
  // // } 
  // // if (userGuess < myNum){
    // //   alert('Too low!');
    // // } 
    // // if (userGuess === myNum){ 
      // //   alert('Great Job!');
// ADDIONAL NOTES
      
      
      
      
// QUESTION #6

let myNum = 21;

for(let i = 0; i < 4; i++){
  let userGuess = prompt('Try and guess my number?');
  if(+userGuess === myNum){
    alert('You are correct');
    score++;
// to stop the loop when the condition is met
    break;
    // or use something like i = 4;
  } else if(userGuess > myNum){
    alert('Too high');
  }else if(userGuess < myNum){
    alert('Too low');
  }

  if(i === 3){
    alert('The answer was 21')
  }
}




// ADDITONAL NOTES
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
// ADDTIONAL NOTES



// ADDITIONAL NOTES
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
// ADDITIONAL NOTES

// QUESTION #7
let favSport = ['football', 'basketball', 'rugby', 'baseball', 'soccer'];

for(let i = 0; i < 6; i++){
  let sportGuess = prompt('Guess what my favorite sport is').toLowerCase();

  for(let j = 0; j < favSport.length; j++){
    if(sportGuess === favSport[j]){
      alert('Yes, you got it right!');
      score++;
      i = 6;
      break;
    }
  }
}

alert(`These were all the possible guesses: ${favSport}`);
alert(`Your score is ${score} out of 7`)