// name
var userName = prompt ('What is your name?');
console.log ('The user\'s name is', userName);
// quest
var userQuest = prompt ('Hello, ' + userName + '!\nWhat is your quest?');
console.log ('The user quest is ', userQuest);
// color
var userColor = prompt ('That is a noble quest, ' + userName + '.\nWhat is your favorite color?');
console.log ('The user\'s favorite color is', userColor);
// from now on, we address the user like this
var greeting = 'Your Highness, ' + userName + '-who-likes-' + userColor + ', ';
// repeat question about velocity until user provides a numeric answer
do{
    var userVelocity = prompt (greeting + 'what is the airspeed velocity of an unladen swallow? (in km/hr)');
    console.log ('The user\'s velocity guess is', userVelocity, 'km/hr');
    if(isNaN(userVelocity)) {
        alert('Please enter a number.');
    }
} while(isNaN(userVelocity))
// respond to user about the velocity
if(userVelocity < .5) {
    alert('I think you underestimate the capabilities of the mighty swallow!');
} else if(userVelocity < 30) {
    alert('That seems like a reasonable guess to me.');
} else {
    alert('You seem very optimistic about the capabilities of swallows!');
} 