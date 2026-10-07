/* =====================================
   MENU MOBILE
===================================== */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("ativo");

});


/* =====================================
   FECHAR MENU AO CLICAR
===================================== */

const links = document.querySelectorAll(".menu a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("ativo");

    });

});


/* =====================================
   ANIMAÇÃO AO ROLAR A PÁGINA
===================================== */

const elementos = document.querySelectorAll(
    ".tratamento, .diferencial, .contato-card, .sobre-texto"
);

elementos.forEach(function (elemento) {

    elemento.classList.add("animar");

});


function verificarAnimacoes() {

    const alturaTela = window.innerHeight;

    elementos.forEach(function (elemento) {

        const posicao = elemento.getBoundingClientRect().top;

        if (posicao < alturaTela - 80) {

            elemento.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll", verificarAnimacoes);

verificarAnimacoes();


/* =====================================
   BOTÕES
===================================== */

const botoes = document.querySelectorAll(".botao");

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        console.log("Navegando para o agendamento...");

    });

});


/* =====================================
   FECHAR MENU AO AUMENTAR A TELA
===================================== */

window.addEventListener("resize", function () {

    if (window.innerWidth > 800) {

        menu.classList.remove("ativo");

    }

});


/* =====================================
   MENSAGEM NO CONSOLE
===================================== */

console.log(
    "Site do Consultório de Odontologia carregado com sucesso!"
);