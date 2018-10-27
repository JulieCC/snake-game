// CE FICHIER RASSEMBLE TOUTES LES FONCTIONS GLOBALES

// Générer des coordonnées au hasard
function randomCoordinates(boardDim){
    var x = Math.floor(Math.random() * boardDim );
    var y = Math.floor(Math.random() * boardDim );
    return [x,y];
};

// Générer le nom de la classe dans le bon format
function formatName(position){
    return "row" + position[0] + "." + "col"+ position[1];
}
