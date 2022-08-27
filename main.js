console.log('Tuwaiq Academy - JavaScript')
console.log('Week 4 Day 3 HW')

$(document).ready(function () {

    const users = [{user:'Feras', password:'1234'}, {user:'Alnowiser', password:'5678'}];
    const username = $('#username');
    const userpass = $('#password');
    const btn_login = $('#login');
    const par_login = $('#loginPar');

    function verify() {
        const currentUsername = username.val();
        const currentUserpass = userpass.val();
        for(let i = 0; i < users.length; i++) {
            if(currentUsername === users[i].user && currentUserpass === users[i].password) {
                par_login.css("background-color","lightgreen");
                par_login.css("color", "green");
                par_login.text('Login Success');
                return;
            }
        }
    
        par_login.css("background-color","#ffcccd");
        par_login.css("color", "red");
        par_login.text('Login Failed');
        return;
        
    }

    btn_login.click(verify)

})
