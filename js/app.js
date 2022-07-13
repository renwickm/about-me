'use strict';

let siteVisitor = prompt('What is your name?');

alert(`Welcome to my site ${siteVisitor}! Guess these facts about me.`);

let questionOne = prompt('Yes or No...Was my High Schools mascot an Indian?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  alert('You are correct!');
} else if(questionOne === 'no' || questionOne === 'n'){
  alert('You are wrong...');
} else{
  alert('Answer yes or no')
}

let questionTwo = prompt('Was my first job as a Cook or Deckhand?').toLowerCase();

if (questionTwo === 'Cook' || questionTwo === 'cook'){
  alert('Well done! You are good at this!')
} else if(questionTwo === 'Deckhand' || questionTwo === 'deckhand'){
  alert('That is nice of you,..but Wrong!')
} else {
  alert('Maybe you just dont care?')
}

let questionThree = prompt('Based on my appearance, do you think my hobbies include going to the gym?').toLowerCase();

if (questionThree === 'yes' || questionThree === 'Yes'){
  alert('Gee thanks! I try!')
} else if(questionThree === 'no' || questionThree === 'No'){
  alert('Six-packs are bought at the store...right?')
} else {
  alert('I will never be Arnold, but that doesnt mean I dont care?')
}

let questionFour = prompt('Would you believe that Underwater Basket Weaving is a skill I look to add to my repertoire?').toLowerCase();

if (questionFour === 'yes' || questionFour === 'Yes'){
  alert('Wow, I must be old if you dont get that joke.')
} else if (questionFour === 'no' || questionFour === 'No'){
  alert ('Good! I would like to think not!')
} else {
  alert('Ignoring this is actually the proper response. Well done!')
}

let questionFive = prompt('One of my personal goals is to hike the PCT in full, True or False?').toLowerCase();

if (questionFive === 'True' || questionFive === 'true' || questionFive === 't'){
  alert('Yes, that is correct!')
} else if (questionFive === 'False' || questionFive === 'false' || questionFive === 'f'){
  alert ('It would be dificult, but I think I could get it done')
} else {
  alert ('Have any suggestions?')
}