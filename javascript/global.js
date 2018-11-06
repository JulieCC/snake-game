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
var lenInit = 4; // longueur initiale du serpent
var snakeMove = 100; // fréquence à laquelle le serpent avance
var snakeFreq = 2000; // fréquence à laquelle le serpent grandit
var fruitFreq = 10000// fréquence à laquelle le fruit change de place
var turnScore = 0 // score pour la partie en cours
var bonusFruit = 10; // nombre de points gagnés à chaque fruit croqué
var lastTurn = 0; // Déclencheur de dernière partie

// Paramètres de la partie 
var myPlayer; // joueur actif
var player1;
var player2;
var growingID = 0 ; // compteur pour la fonction grow
var fruitID = 0 ; // compteur pour le déplacement du fruit
var snakeID = 0 ; // compteur pour le déplacement du snake


