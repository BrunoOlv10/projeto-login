// const btn = document.querySelector("#send");

// btn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const login = document.querySelector("#ilogin");
//     const value1 = login.value;
//     document.write("Email: "+value1);
//     const senha = document.querySelector("#isenha");
//     const value2 = senha.value;
//     document.write("Senha: "+value2);
// })

function index(){
    window.location='form.html';
}

function save(){
    window.localStorage.setItem('login', $('#ilogin').val());
}

function load(){
    $('#output').val(window.localStorage.getItem('login'));
}

function erase(){
    window.localStorage.removeItem('login');
}