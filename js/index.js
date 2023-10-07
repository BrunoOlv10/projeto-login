    function adicionarLocalmente() {
        var dados = JSON.stringify({
            login : document.getElementById("email").value,
            senha : document.getElementById("senha").value
        });
        localStorage.setItem("storage", JSON.stringify(dados));
        window.location.replace('dados.html');
    };

    function getErrorMessage(error) {
        if(error.code == "auth/user-not-found") {
            return "Usuário não encontrado!";
        }
        if(error.code == "auth/email-already-in-use") {
            return "Já existe um usuário cadastrado com este email!";
        }
        if(error.code == "auth/invalid-email") {
            return "Email inválido!";
        }
        if(error.code == "auth/wrong-password") {
            return "Senha incorreta!";
        }
        if(error.code == "auth/user-not-found") {
            return "Erro: Nenhum usuário encontrado com este email";
        }
        if(error.code == "auth/missing-email") {
            return "Erro: Digite seu email";
        }
        return error.message;
    }

document.getElementById("logar").addEventListener("click", function() {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value;

    if(!form.checkValidity()) return;

    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(() => {
        adicionarLocalmente()
        alert("Logado com sucesso!")
        window.location.href = "dados.html"
    })
    .catch((error) => {
        alert(getErrorMessage(error));
    });
    
});

document.getElementById("cadastrar").addEventListener("click", function() {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value;

    if(!form.checkValidity()) return;
    if(senha.length < 7 || senha.length > 20) {
        alert("Quantidade de caracteres incorreta! Crie uma senha entre 7 a 20 caracteres.")
        return
    }

    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(() => {
        alert("Usuário cadastrado com sucesso!");
    })
    .catch((error) => {
        alert(getErrorMessage(error));
    })
    
});

function redefinirSenha() {
    const email = document.getElementById("email").value;
    
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Email de redefinição de senha enviado!")
        })
        .catch((error) => {
            alert(getErrorMessage(error));
        })
}