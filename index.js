const {stdin, stdout} = require('process');
const validatePassword = require('./passwordvalidation');

const readline = require('readline').createInterface({
    input: stdin,
    output: stdout })
    
const passwordvalidation = require("./passwordvalidation");

            validate();
            function validate(){
                readline.question("Enter Password or :q to Quit ", (word) => {
                    if(word == "q"){
                        console.log("Goodbye!");
                        readline.close();
                    }
                    else if(passwordvalidation(word) == false){
                    console.log("The password is invalid: ", (word));
                    validate();
                     
                    } else if(passwordvalidation(word) != false){
                        console.log("The password is valid: ", (word))
                        validate();
                    } 
                });
            }
    

        

        
    
