document.getElementById('submit-login').addEventListener('click', function(){
    const inputEmail = document.getElementById("input-email");
    const emailtext = inputEmail.value;
    const inputPassword = document.getElementById('input-password');
    const passwordText = inputPassword.value;
    if(emailtext == 'talukder@td.com' && passwordText == 'hello'){
        window.location.href="banking.html"
    }
})