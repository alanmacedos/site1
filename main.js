const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const altura = (document.getElementById("altura").value)
    const largura = (document.getElementById("largura").value)

    const area = Number(altura) * Number(largura);

    document.getElementById("resultado").innerText = "Área: " + area, "metros quadrados";
});