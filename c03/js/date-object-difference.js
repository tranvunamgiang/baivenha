var today = new Date();
var year = today.getFullYear();
// Set the date that the company was established
var est = new Date('Apr 16 ,1996 15:45:55');
// Get the difference between the & now in milliseconds
var difference = today.getTime() - est.getTime();
// Divide by number of milliseconds to get years
difference = (difference / 315569000000);

// Create a variable called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById('message');
// Write the message into that element.
elMsg.textContent = Math.floor(difference) + 'years of online travel advice';