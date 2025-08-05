function calculadora() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let resultado = num1 + num2;

  document.getElementById("resultado").innerText = "O resultado é: " + resultado;

  document.getElementById("img").innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/43/43790.png" alt="Imagem do simbolo de soma!">
    `;
}
