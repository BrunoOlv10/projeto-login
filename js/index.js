    function adicionar() {
        var dados = JSON.stringify({
            login : document.querySelector("input[name=login]").value,
            senha : document.querySelector("input[name=senha]").value
        });
        localStorage.setItem("storage", JSON.stringify(dados));
        window.location.replace('dados.html');
    };