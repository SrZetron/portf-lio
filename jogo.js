let numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log("Número secreto:", numeroSecreto);

function jogo() {
    let palpite = Number(document.getElementById("palpite").value);
    let mensagem = document.getElementById("msg");

    if (!palpite || palpite < 1 || palpite > 10) {
        mensagem.textContent = "Digite um número válido entre 1 e 10!";
        return;
    }

    if (palpite === numeroSecreto) {
        mensagem.textContent = "Parabéns, você acertou! Novo jogo começando...";
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
        console.log("Novo número secreto:", numeroSecreto);
        document.getElementById("palpite").value = "";
    } else if (palpite > numeroSecreto) {
        mensagem.textContent = "O número certo é menor do que esse!";
    } else {
        mensagem.textContent = "O número certo é maior do que esse!";
    }
}
