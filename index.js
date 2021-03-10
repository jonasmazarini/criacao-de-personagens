//Variáveis dos Personagens
var Classe;
var Raca;
var Background;
var Tendencia;

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

  //Imprimir o Personagem criado na tabela html
  document.getElementById("tabela").style.visibility = "visible";
  document.getElementById("head-classe").innerText = "Classe";
  document.getElementById("head-raca").innerText = "Raça";
  document.getElementById("head-background").innerText = "Background";
  document.getElementById("head-tendencia").innerText = "Tendência";
  document.getElementById("classe").innerText = Classe;
  document.getElementById("raca").innerText = Raca;
  document.getElementById("background").innerText = Background;
  document.getElementById("tendencia").innerText = Tendencia;
}
