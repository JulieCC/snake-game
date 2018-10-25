// Paramètres du jeu
var boardDim = 2; // dimensions du tableau
var snakeFreq; // fréquence à laquelle le serpent grandit
var bonusFruit; // nombre de points gagnés à chaque fruit croqué

// create the board
var board = [];

function createBoard(boardDim) {
    var boardTable = `<table class="board">`;
    var boardRow = `<tr class="{ligne-ID}">`;
    var boardCell = `<td class="{ligneID} {columnID}" ></td> `;
 
  for (var i = 0; i < boardDim; i++) {
    boardRow = boardRow.replace("{ligne-ID}", "row" + i);

    for (var j = 0; j < boardDim; j++) {
        console.log("j= "+j);
      boardCell = boardCell.replace("{ligneID}", "row" + i+"");
      boardCell = boardCell.replace("{columnID}", "col" + j+"");
      boardRow = boardRow + boardCell;
      console.log("j= "+j);
    }
    boardRow = boardRow + `</tr>`;
    console.log(i);
    boardTable = boardTable + boardRow;
  }
  boardTable = boardTable + `</table>`;
  console.log("Ligne finale : " + boardTable);
}
var startGame = function() {
  createBoard(boardDim);
};

$(document).ready(function() {
  $(".button-start-game").click(function() {
    startGame();
  });
});
