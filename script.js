
let tamanhoFonte = 100;
let tamanhoMain = 1100;
let main = document.querySelector("main");

function aumentarFonte() {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";

    tamanhoMain += 50;
    main.style.maxWidth = tamanhoMain + "px";
}

function diminuirFonte() {
    if (tamanhoFonte > 50) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }

    if (tamanhoMain > 1100) {
        tamanhoMain -= 50;
        main.style.maxWidth = tamanhoMain + "px";
    }
}

function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}
