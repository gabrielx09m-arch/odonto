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
/* =====================================
   BRASILAPI - UNIDADE ODONTOLÓGICA
===================================== */

const formCep = document.getElementById("formCep");

const cep = document.getElementById("cep");

const resultadoCep = document.getElementById("resultadoCep");

const cidade = document.getElementById("cidade");

const estado = document.getElementById("estado");

const unidadeOdonto =
    document.getElementById("unidadeOdonto");


formCep.addEventListener("submit", async function (event) {

    event.preventDefault();


    /* REMOVE CARACTERES DO CEP */

    const cepDigitado =
        cep.value.replace(/\D/g, "");


    /* VERIFICA SE O CEP TEM 8 NÚMEROS */

    if (cepDigitado.length !== 8) {

        alert("Digite um CEP válido.");

        return;

    }


    try {

        /* CONSULTA A BRASILAPI */

        const resposta = await fetch(
            `https://brasilapi.com.br/api/cep/v2/${cepDigitado}`
        );


        if (!resposta.ok) {

            throw new Error("CEP não encontrado.");

        }


        const dados = await resposta.json();
    


        /* MOSTRA CIDADE E ESTADO */

        cidade.textContent =
            dados.city || "Não encontrado";

        estado.textContent =
            dados.state || "Não encontrado";


        resultadoCep.style.display = "block";


        /* =================================
           VERIFICA ITABAIANA - SE
        ================================= */

        if (
            dados.city &&
            dados.city.toLowerCase() === "itabaina" &&
            dados.state &&
            dados.state.toUpperCase() === "SE"
        ) {

            unidadeOdonto.style.display = "block";

        } else {

            unidadeOdonto.style.display = "none";

            alert(
                "Não encontramos uma unidade em sua cidade. " +
                "Nossa unidade de referência mais próxima é em Carnópolis-SE."
            );

        }


    } catch (erro) {

        alert(
            "Não foi possível consultar esse CEP."
        );

        resultadoCep.style.display = "none";

        unidadeOdonto.style.display = "none";

    }

});