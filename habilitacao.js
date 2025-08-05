function verificar() {
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");

    if (idade >= 18) {
        resultado.textContent = "Você PODE tirar a carteira de motorista!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Você NÃO pode tirar a carteira de motorista!";
        resultado.style.color = "red";
    }
}
