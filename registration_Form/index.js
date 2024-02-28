document.querySelector("#logInForm").addEventListener('submit',function logInForm (e) {
    let userData = JSON.parse(localStorage.getItem('userDetails')) ?? [];
    userData.forEach(element => {
        if(e.target.email.value == element.userEmail && e.target.password.value == element.userPassword){
            alert("congrats you don it")
        }else{
            alert("wrong email or password")
        }
    });
    
    e.preventDefault()
});