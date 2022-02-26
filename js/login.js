window.onload = () => {
    this.sessionStorage.setItem('username', 'admin');
    this.sessionStorage.setItem('password', 'admin');
}

var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var form = document.querySelector('form');
form.onsubmit = () => {return false}

login.onclick = () => {
    if((input[0].value != "") && (input[1].value != "")){

    }
    else{
        if(input[0].value == ""){
            input[0].nextElementSibling.textContent = "Username is empty";
            setTimeout(()=>{
                input[0].nextElementSibling.textContent = "";
            }, 2000);
        }
    }
}