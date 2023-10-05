    function adicionar() {
        var dados = JSON.stringify({
            login : document.querySelector("input[name=login]").value,
            senha : document.querySelector("input[name=senha]").value
        });
        localStorage.setItem("storage", JSON.stringify(dados));
        window.location.replace('dados.html');
    };

    (form.senha().value)
    if(form.senha().value.length < 7 || form.senha().value.length > 20) {
    alert("Quantidade de caracteres incorreta")
    return
    }

    function register(login, senha) {
        return firebase.auth().createUserWithEmailAndPassword(login, senha);
    }

    function login() {
        firebase.auth().signInWithEmailAndPassword(
            form.email().value, form.senha().value
        ).then(response => {
            window.location.href = "../dados.html"; 
        }).catch(error => {
            alert(getErrorMessage(error));
        });
    }

    function getErrorMessage(error) {
        if(error.code == "auth/user-not-found") {
            return "Usuário não encontrado";
        }
        return error.message;
    }