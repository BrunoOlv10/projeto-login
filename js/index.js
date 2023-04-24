(function () {
    function adicionar() {
        var dados = JSON.stringify({
            login   : document.querySelector("input[name=login]").value,
            senha   : document.querySelector("input[name=senha]").value
        });
        // tbClientes.push(dados);
        localStorage.setItem("storage", JSON.stringify(dados));
    }
    var form = document.querySelector("form");
    form.addEventListener("submit", function () {
        // event.preventDefault(); event
        return adicionar();
    });
})();