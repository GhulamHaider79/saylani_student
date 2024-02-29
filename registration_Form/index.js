var questionDiveShow = document.querySelector('#questionDiveShow');
var loginHide = document.querySelector('.log_In');

// function for check email registered or not and password match or not ant go to questions section
document.querySelector("#logInForm").addEventListener('submit', function logInForm(e) {
    let userData = JSON.parse(localStorage.getItem('userDetails')) ?? [];

    let loggedIn = false; 

    userData.forEach(element => {
        if (e.target.email.value == element.userEmail && e.target.password.value == element.userPassword) {
            alert("Successfully Login");
            loggedIn = true;
            loginHide.classList.add('for_display_none')
            questionDiveShow.classList.add('containerForQuiz');
        } 
    });

    if (!loggedIn) {
        alert("wrong email or password");
    }

    e.preventDefault()
});

// Question and answer
var questions = [
    {
        'question': "What does DOM stand for?",
        'a': "Document Order Model",
        'b': "Document Object Model",
        'c': "Data Object Model",
        'd': "Document Output Model",
        'correct': "b"
    },
    {
        'question': "Which method is used to select an element by its id in the DOM?",
        'a': "getElementByName()",
        'b': "querySelector()",
        'c': "getElementById()",
        'd': "selectById()",
        'correct': "c"
    },
    {
        'question': "Which property is used to access the text content of an HTML element in the DOM?",
        'a': "innerText",
        'b': "textContent",
        'c': "innerHTML",
        'd': "contentText",
        'correct': "b"
    },
    {
        'question': "What is the purpose of the createElement method in the DOM?",
        'a': "To remove an element from the DOM",
        'b': "To create a new HTML element",
        'c': "To modify the attributes of an element",
        'd': "To change the styling of an element",
        'correct': "b"
    },
    {
        'question': "Which method is used to add a new class to an HTML element in the DOM?",
        'a': "addClass()",
        'b': "appendClass()",
        'c': "addAttribute()",
        'd': "classList.add()",
        'correct': "d"
    },
    {
        'question': "How can you remove an HTML element from the DOM using JavaScript?",
        'a': "element.remove()",
        'b': "removeElementById()",
        'c': "deleteElement()",
        'd': "detachElement()",
        'correct': "a"
    },
    {
        'question': "Which method is used to get the value of an attribute of an HTML element in the DOM?",
        'a': "getAttribute()",
        'b': "attributeValue()",
        'c': "fetchAttribute()",
        'd': "element.attribute()",
        'correct': "a"
    },
    {
        'question': "Which property returns the parent node of an element in the DOM?",
        'a': "parent()",
        'b': "parentElement",
        'c': "parentNode",
        'd': "parent",
        'correct': "c"
    } ,
    {
        'question': "What does the querySelectorAll method return in the DOM?",
        'a': "All elements with a specified class name",
        'b': "The first element with a specified class name",
        'c': "All elements that match a specified CSS selector",
        'd': "The last element that matches a specified CSS selector",
        'correct': "c"
    } ,
    {
        'question': "How can you change the style of an HTML element in the DOM using JavaScript?",
        'a': "setStyle()",
        'b': "modifyStyle()",
        'c': "style.setAttribute()",
        'd': "element.style.property = value",
        'correct': "d"
    }

]

var questionToShow = document.querySelector('.question');
var optionInput = document.querySelectorAll('.optionsCheck')

var index = 0;
var total = questions.length;
var right = 0;
var wrong = 0;

// initial function to show the first question on the load of page
function pageLoad() {
    if (index == total) {
        return result()
    }
    reset()

    var data = questions[index]
    questionToShow.innerHTML = `Question ${index + 1}: ${data.question}`
    optionInput[0].nextElementSibling.innerHTML = `${data.a}`
    optionInput[1].nextElementSibling.innerHTML = `${data.b}`
    optionInput[2].nextElementSibling.innerHTML = `${data.c}`
    optionInput[3].nextElementSibling.innerHTML = `${data.d}`
}
// initially call the function to display on page load 
pageLoad()

// function for check which option user select & count the score of user
document.querySelector('.opt_btn').addEventListener('click', function checkAnswer(e) {
    var data = questions[index];
    var userSelected = ""
    // for each loop for all option for check user selection
    optionInput.forEach(element => {
        if (element.checked) {
            userSelected = element.value
        }
    });
    // check user selection is it right or wrong 
    if (userSelected == data.correct) {
        right++
    } else {
        wrong++
    }
    // here is index increment for go to next question
    index++
    // now call the initial function to load next question
    pageLoad();
});

// function for remove check when go to the next question
function reset() {
    optionInput.forEach(element => {
        element.checked = false
    })
}

// function for show the result 
function result() {
    document.querySelector('#questionDiveShow').innerHTML = `
    <h3>Your Score is </h3> 
    <h4>Total: ${total}</h4>
    <h4>Correct: ${right}</h4>
    `
}