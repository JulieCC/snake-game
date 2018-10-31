// CE FICHIER RASSEMBLE TOUTES LES FONCTIONS GLOBALES

// Générer des coordonnées au hasard
function randomCoordinates(boardDim){
    var x = Math.floor(Math.random() * boardDim );
    var y = Math.floor(Math.random() * boardDim );
    return [x,y];
};

// Générer le nom de la classe dans le bon format
function formatName(element){
    return "row" + element.row + "." + "col"+ element.col;
}

// Paramètres du jeu
var boardDim = 15; // dimensions du tableau
var snakeMove; // fréquence à laquelle le serpent avance
var snakeFreq; // fréquence à laquelle le serpent grandit
var bonusFruit; // nombre de points gagnés à chaque fruit croqué

// Initialiser le snake
var posInit = "right";
var lenInit = 4;