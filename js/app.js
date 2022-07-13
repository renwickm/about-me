'use strict';

let siteVisitor = prompt('What is your name?');

alert(`Welcome to my site ${siteVisitor}! Guess these facts about me.`);

let questionOne = prompt('Yes or No...Was my High Schools mascot an Indian?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes'){
  alert('You are correct!');
  //console.log(questionOne)
} else if(questionOne === 'n' || questionOne === 'no'){
  alert('You are wrong...');
} else{
  alert('Answer yes or no')
}

let questionTwo = prompt('Was my first job as a Cook?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes'){
  alert('Well done! You are good at this!')
  //console.log(questionTwo)
} else if(questionTwo === 'n' || questionTwo === 'no'){
  alert('That is nice of you,..but Wrong!')
} else {
  alert('Maybe you just dont care?')
}

let questionThree = prompt('Based on my appearance, do you think my hobbies include going to the gym?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes'){
  alert('Gee thanks! I try!')
  //console.log(questionThree)
} else if(questionThree === 'no' || questionThree === 'no'){
  alert('Six-packs are bought at the store...right?')
} else {
  alert('I will never be Arnold, but that doesnt mean I dont care?')
}

let questionFour = prompt('Would you believe that Underwater Basket Weaving is a skill I look to add to my repertoire?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes'){
  alert('Wow, I must be old if you dont get that joke.')
  //console.log(questionFour)
} else if (questionFour === 'n' || questionFour === 'no'){
  alert ('Good! I would like to think not!')
} else {
  alert('Ignoring this is actually the proper response. Well done!')
}

let questionFive = prompt('One of my personal goals is to hike the PCT in full, yes or no?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes'){
  alert('Yes, that is correct!')
  //console.log(questionFive)
} else if (questionFive === 'n' || questionFive === 'no'){
  alert ('It would be dificult, but I think I could get it done')
} else {
  alert ('Have any suggestions?')
}