//Character Variables
var characterClass = "";
var race = "";
var background = "";
var alignment = "";
var abilityList = [];

//Arrays das possibilidades
var classList = [
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
var raceList = [
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
var backgroundList = [
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
var alignmentList = [
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

//Random Functions of the possibilities
function randomClass() {
  return Math.floor(Math.random() * classList.length);
}

function randomRace() {
  return Math.floor(Math.random() * raceList.length);
}
function randomBackground() {
  return Math.floor(Math.random() * backgroundList.length);
}
function randomAlignment() {
  return Math.floor(Math.random() * alignmentList.length);
}

function sortfunction(a, b) {
  return a - b;
}

//Rolling 4d6 and adding the 3 largest numbers, according to the rules in the Player's Handbook
function sumarrayDices(arrayDices) {
  arrayDices.sort(sortfunction);
  arrayDices.reverse();
  arrayDices.pop();
  return arrayDices.reduce((total, num) => total + num);
}

function createRandomAbility() {
  min = Math.ceil(1);
  max = Math.floor(6);
  arrayDices = [];

  while (arrayDices.length <= 3) {
    arrayDices.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return sumarrayDices(arrayDices);
}

//Input Selection Button
const button = document.querySelector("input");

//Button Listener
button.addEventListener("click", createCharacter);

//Function to generate the new Random Character
function createCharacter() {
  //Random of the Characteristics
  var characterClass = classList[randomClass()];
  var race = raceList[randomRace()];
  var background = backgroundList[randomBackground()];
  var alignment = alignmentList[randomAlignment()];
  var abilityList = [];
  while (abilityList.length <= 5) {
    abilityList.push(createRandomAbility());
  }
  abilityList.sort(sortfunction);

  //Printing the created character on the html elements
  document.getElementById("table").style.visibility = "visible";
  document.getElementById("head-class").innerText = "Classe";
  document.getElementById("head-race").innerText = "Raça";
  document.getElementById("head-background").innerText = "Background";
  document.getElementById("head-alignment").innerText = "Tendência";
  document.getElementById("head-abilities").innerText = "Habilidades";
  document.getElementById("class").innerText = characterClass;
  document.getElementById("race").innerText = race;
  document.getElementById("background").innerText = background;
  document.getElementById("alignment").innerText = alignment;
  document.getElementById("abilities").innerText = abilityList;
}
