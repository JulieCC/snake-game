// Paramètres du jeu
var boardDim = 10; // dimensions du tableau
var snakeFreq; // fréquence à laquelle le serpent grandit
var bonusFruit; // nombre de points gagnés à chaque fruit croqué

// create board
function createBoard(boardDim) {
  var boardTable = `<table class="board">`;
  var boardRow = `<tr class="{ligne-ID}">`;
  var boardCell = `<td class="{ligneID} {columnID}" ></td> `;

  for (var i = 0; i < boardDim; i++) {
    var myBoardRow = boardRow.replace("{ligne-ID}", "row" + i);

    for (var j = 0; j < boardDim; j++) {
    //   console.log("i=" + i + ", j= " + j);
      var rowtext = "row" + i;
      var coltext = "col" + j;
      var myBoardCell = boardCell.replace("{ligneID}", rowtext);
      myBoardCell = myBoardCell.replace("{columnID}", coltext);
    //   console.log("myboardCell=" + myBoardCell);
      myBoardRow += myBoardCell;
    }
    myBoardRow += "</tr>" + "\n";
    boardTable += myBoardRow;
  }
  boardTable = boardTable + `</table>`;
//   console.log("Ligne finale:\n" + boardTable);
  return boardTable;
}

// Initialiser le jeu : afficher le tableau et le fruit
var startGame = function() {
  var boardDiv = document.getElementById("board-game");
  boardDiv.innerHTML = createBoard(boardDim);  
  $('#board-game tr .' + fruitClass).addClass('fruit');
};

// placer le fruit au hasard
var fruit = {
  x : Math.floor(Math.random() * (boardDim +1 )),
  y : Math.floor(Math.random() * (boardDim +1 )),
};
// récupérer la position du fruit
var fruitPosition = {
    row : "row" + fruit.x,
    col : "col"+fruit.y,
  };
var fruitClass = fruitPosition.row + "." + fruitPosition.col;

$(document).ready(function() {
  $(".button-start-game").click(function() {
    startGame();
    console.log(fruitClass);
    // $('#board-game tr .row1.col2').addClass('fruit');
  });
});
