function jogo() {
    let jogoFoda = document.getElementById("num1").value;

    if (jogoFoda % 2 == 0) {
        document.getElementById("resultado").innerText = "Par!👎";
        document.getElementById("img1").innerHTML = `
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3T3XZAbcuqB1zR_CQS7kg2a8x0JoDOPyQg&s">
            <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/bw/512px/1f44e.png" alt="Dedao Negativo" style="width: 200px">
            <img src="https://images.emojiterra.com/twitter/v14.0/512px/1f641.png" alt="carinha triste" style="width: 200px">
        `;
    } else {
        document.getElementById("resultado").innerText = "Impar!👍";
        document.getElementById("img1").innerHTML = `
            <img src="https://uniquelywsi.com.br/wp-content/uploads/2023/08/redeimpar.png">
            <img src="https://cdn-icons-png.flaticon.com/512/9971/9971679.png" alt="Dedao Positivo" style="width: 200px">
            <img src="https://images.emojiterra.com/google/android-10/512px/1f60a.png" alt="carinha feliz" style="width: 200px">
        `;
    }
}
