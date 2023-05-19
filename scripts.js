function consultaEndereco() {
    let cep = document.querySelector('#cep').value

    if (cep.length !== 8) {
        alert('Cep inválido');
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(function (response) {
            response.json().then(function (data) {
                mostrarEndereço(data);
            })
        });
}

function mostrarEndereço(dados) {
    let resultado = document.querySelector('#resultado');
    if (dados.erro) {
        resultado.innerHTML = "<h2>Não foi possivel localizar endereço!<h2>";
    } else {
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
    }

}