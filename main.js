console.log('Tuwaiq Academy - JavaScript')
console.log('Week 4 Day 3 HW')

// this function let the code wait the document load then start functions
$(document).ready(function () {
    // jQery code uder this line 

    // users database with its username and password
    const users = [
        {user:'Feras', password:'1234'}, 
        {user:'Alnowiser', password:'5678'}
    ];

    const username = $('#username'); // the input user name
    const userpass = $('#password'); // the input user password
    const btn_login = $('#login'); // the button which the user will select to login
    const par_login = $('#loginPar'); // the paragraph shows the login status

    // this function will verify the input from the user and check with the database if they are equal
    function verify() {

        const currentUsername = username.val(); // saving the username when selecting the button
        const currentUserpass = userpass.val(); // saving the password when selecting the button

        // checking the the database array by index
        for(let i = 0; i < users.length; i++) {

            // if the user input check succeed
            if(currentUsername === users[i].user && currentUserpass === users[i].password) {
                par_login.css("background-color","lightgreen"); // change the background color to lightgreen
                par_login.css("color", "green"); // change the text color to green
                par_login.text('Login Success'); // change the paragraph text to Login Success
                return; // end the for loop and exit
            }
        }
    
        // if the user input check failed
        par_login.css("background-color","#ffcccd"); // change the background color to lightgred
        par_login.css("color", "red"); // change the text color to red
        par_login.text('Login Failed'); // change the paragraph text to Login Failed
        return; // exit the function
        
    }

    // when button clicked call verify function
    btn_login.click(verify)

});
