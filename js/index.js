const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    const login = document.querySelector("#ilogin");
    const value1 = login.value;
    document.write("Email: "+value1);
    const senha = document.querySelector("#isenha");
    const value2 = senha.value;
    document.write("Senha: "+value2);
})