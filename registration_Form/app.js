
document.querySelector("#formOne").addEventListener('submit',function registration (e) {
   
    // Get form elements by ID
     let usernameInput = e.target.name.value;
     let numberInput = e.target.number.value;
     let emailInput = e.target.email.value;
     let passwordInput = e.target.password.value;
     let confirmPassword = e.target.retypePassword.value;

     console.log(usernameInput);
    
        //console.log(usernameInput, numberInput, emailInput, passwordInput, confirmPassword);
    let userData = JSON.parse(localStorage.getItem('userDetails')) ?? [];
   
    
        if (usernameInput === "" || usernameInput.length < 3){
            alert("Please enter your valid name");
        }
        else if (numberInput === "" || numberInput.length < 11){
            alert("Please enter your phone valid number");
        }
        else if (emailInput === "" || emailInput.indexOf('@') == -1 || emailInput.indexOf('@') == 0){
            alert("Please enter a valid Email");
        } else if (passwordInput.length < 6) {
            // If password is less than 6 characters
            alert("Password should have at least 6 characters");
        } else if (!/\d/.test(passwordInput) || !/[a-zA-Z]/.test(passwordInput)) {
            // If password does not contain both alphabets and numbers
            alert("Password must contain both alphabets and numbers");
        }else if (passwordInput !== confirmPassword){
            alert("Your password not match");
        }
        else{
            userData.push({
                useName: usernameInput,
                userNumber: numberInput,
                userEmail: emailInput,
                userPassword: passwordInput,
                confirmPassword: confirmPassword
            });
            localStorage.setItem('userDetails',JSON.stringify(userData))
            console.log(userData)
            document.querySelector(".container").classList.add('for_display_none')
            document.querySelector('.after_registered').classList.remove('for_display_none');
        }
        
        e.preventDefault();
       
      
    } );



  
   



  

