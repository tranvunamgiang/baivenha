// Create a variable called msg to hold a new message
var msg = 'Sign up to recevie our newsletter for 10% off!';

// Create a  function to update the content of the element whose
function updateMessage(){
    var el = document.getElementById('message');
    el.textContent = msg;
}
// Call the function 
updateMessage();