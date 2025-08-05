function idade() {
    let idadeDoUsuario = document.getElementById("Deku").value;
    idadeDoUsuario = parseInt(idadeDoUsuario);
    let mensagem = document.getElementById("mensagem");

    if (isNaN(idadeDoUsuario)) {
        mensagem.innerText = "Por favor, digite um número válido.";
        return;
    }

    if (idadeDoUsuario < 12) {
        mensagem.innerText = "Você é uma criança.";
    } else if (idadeDoUsuario < 18) {
        mensagem.innerText = "Você é um adolescente.";
    } else if (idadeDoUsuario < 60) {
        mensagem.innerText = "Você é um adulto.";
    } else {
        mensagem.innerText = "Você é um idoso.";
    }
}
