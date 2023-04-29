    function adicionar() {
        var dados = JSON.stringify({
            login : document.querySelector("input[name=login]").value,
            senha : document.querySelector("input[name=senha]").value
        });
        localStorage.setItem("storage", JSON.stringify(dados));
        window.location.replace('dados.html');
    };

    const firebaseConfig = {
        apiKey: "AIzaSyBvKQO59l_CAuZil1GOry0UVfvkNwsQscQ",
        authDomain: "tela-login-19bad.firebaseapp.com",
        projectId: "tela-login-19bad",
        storageBucket: "tela-login-19bad.appspot.com",
        messagingSenderId: "472437703349",
        appId: "1:472437703349:web:ff620e61c7b47df73374fc"
      };
    
      firebase.initializeApp(firebaseConfig);

