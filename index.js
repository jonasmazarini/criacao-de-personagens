//Variáveis dos Personagens
var Classe = "";
var Raca = "";
var Background = "";
var Tendencia = "";
var Habilidades = [];
var Habilidade = 0;

//Arrays das possibilidades
var classes = [
  "Bárbaro",
  "Bardo",
  "Bruxo",
  "Clérigo",
  "Druida",
  "Feiticeiro",
  "Guerreiro",
  "Ladino",
  "Mago",
  "Monge",
  "Paladino",
  "Ranger",
];
var racas = [
  "Anão",
  "Elfo",
  "Halfling",
  "Meio-Elfo",
  "Draconato",
  "Gnomo",
  "Meio-Orc",
  "Tiefling",
  "Humano",
  "Genasi",
  "Aarakocra",
  "Golias",
];
var backgrounds = [
  "Acólito",
  "Artesão de Guilda",
  "Artista",
  "Charlatão",
  "Criminoso",
  "Eremita",
  "Forasteiro",
  "Herói do Povo",
  "Marinheiro",
  "Nobre",
  "Órfão",
  "Sábio",
  "Soldado",
];
var tendencias = [
  "Leal e Bom",
  "Neutro e Bom",
  "Caótico e Bom",
  "Leal e Neutro",
  "Neutro",
  "Caótico e Neutro",
  "Leal e Mau",
  "Neutro e Mau",
  "Caótico e Mau",
];

//Random Functions das possibilidades
function randomClasse() {
  return Math.floor(Math.random() * classes.length);
}

function randomRaca() {
  return Math.floor(Math.random() * racas.length);
}
function randomBackground() {
  return Math.floor(Math.random() * backgrounds.length);
}
function randomTendencia() {
  return Math.floor(Math.random() * tendencias.length);
}

function sortfunction(a, b) {
  return a - b;
}

function randomHabilidades() {
  min = Math.ceil(1);
  max = Math.floor(6);
  arrayHabilidade = [
    Math.floor(Math.random() * (max - min)) + min,
    Math.floor(Math.random() * (max - min)) + min,
    Math.floor(Math.random() * (max - min)) + min,
    Math.floor(Math.random() * (max - min)) + min,
  ];
  arrayHabilidade.sort(sortfunction);
  arrayHabilidade.reverse();
  Habilidade = 0;
  for (i = 0; i < 3; i++) {
    Habilidade += arrayHabilidade[i];
  }
  return Habilidade;
}

//Seleção do Input Botão
const button = document.querySelector("input");

//Listener do Botão
button.addEventListener("click", criaPersonagem);

//Função para gerar o novo personagem Random
function criaPersonagem() {
  //Random das características
  var Classe = classes[randomClasse()];
  var Raca = racas[randomRaca()];
  var Background = backgrounds[randomBackground()];
  var Tendencia = tendencias[randomTendencia()];
  var Habilidades = [
    randomHabilidades(),
    randomHabilidades(),
    randomHabilidades(),
    randomHabilidades(),
    randomHabilidades(),
    randomHabilidades(),
  ];
  Habilidades.sort(sortfunction);

  //Imprimir o Personagem criado na tabela html
  document.getElementById("tabela").style.visibility = "visible";
  document.getElementById("head-classe").innerText = "Classe";
  document.getElementById("head-raca").innerText = "Raça";
  document.getElementById("head-background").innerText = "Background";
  document.getElementById("head-tendencia").innerText = "Tendência";
  document.getElementById("head-habilidades").innerText = "Habilidades";
  document.getElementById("classe").innerText = Classe;
  document.getElementById("raca").innerText = Raca;
  document.getElementById("background").innerText = Background;
  document.getElementById("tendencia").innerText = Tendencia;
  document.getElementById("habilidades").innerText = Habilidades;
}
