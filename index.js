
// Provided array of characters to be used to create the random passwords.
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
"#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const createPasswordBtn = document.getElementById("createPassword");
const firstPassword = document.getElementById("firstPassword");
const secondPassword = document.getElementById("secondPassword");

// Length of the passwords. 
let passwordLength = 15;

// Ideas for adding features to the app: 
// Add an input field where user can choose how long the password is going to be. 
// Add a copy/paste function so users can copy by clicking on the created password. 

// Function to get a random character from the characters array. 
function getRandomCharacter() {
    let randomChar = Math.floor( Math.random() * characters.length);
    return characters[randomChar];
}

// Function to create a 15 character long password from the provided characters in the characters array. 
function createPassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter();
        
    }
    return randomPassword;  
}


//Event Listener that renders passwords when button is clicked. 
createPasswordBtn.addEventListener("click", () => {
    firstPassword.textContent = createPassword();
    secondPassword.textContent = createPassword();

})


