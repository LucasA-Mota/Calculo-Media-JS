let btn = document.getElementById("botao")
btn.addEventListener("click", function () {
    let resposta = document.getElementById("resultado")
    let no1 = parseFloat(document.getElementById("first").value)
    let no2 = parseFloat(document.getElementById("second").value)
    let no3 = parseFloat(document.getElementById("third").value)
    let no4 = parseFloat(document.getElementById("fourth").value)


    let media = (no1 + no2 + no3 + no4) / 4

    if (media < 5) {
        resposta.innerHTML = "Média: " + media + "</br> Aluno(a) Reprovado(a)"
        resposta.style.color = "red"

    }

    else {
        resposta.innerHTML = "Média: " + media + "</br> Aluno(a) Aprovado(a)"
        resposta.style.color = "blue"
    }

    document.getElementById("first").value = ""
    document.getElementById("second").value = ""
    document.getElementById("third").value = ""
    document.getElementById("fourth").value = ""
})