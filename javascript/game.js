// CE FICHIER GERE LES TOURS ET LE JEU

$(document).ready(function() {

  // Create board
  function createBoard(boardDim) {
    var boardTable = `<table class="board">`;
    var boardRow = `<tr class="{ligne-ID}">`;
    var boardCell = `<td class="{ligneID} {columnID}" ></td> `;

    for (var i = 0; i < boardDim; i++) {
      var myBoardRow = boardRow.replace("{ligne-ID}", "row" + i);

      for (var j = 0; j < boardDim; j++) {
        var rowtext = "row" + i;
        var coltext = "col" + j;
        var myBoardCell = boardCell.replace("{ligneID}", rowtext);
        myBoardCell = myBoardCell.replace("{columnID}", coltext);
        myBoardRow += myBoardCell;
      }
      myBoardRow += "</tr>" + "\n";
      boardTable += myBoardRow;
    }
    boardTable = boardTable + `</table>`;
    return boardTable;
  };

  // Créer et placer le fruit
  function Fruit(row =0 , col = 0) {
    this.row = row,
    this.col = col
  };

  
//   Afficher le fruit = foncton drawFruit
function drawFruit() {
  var myFruitClass = formatName(myFruit);
  $(".fruit").removeClass("fruit");
  $("#board-game tr ." + myFruitClass).addClass("fruit"); 
}

  var myFruit = new Fruit (randomCoordinates(boardDim)[0], randomCoordinates(boardDim)[1]);
  var mySnake = new Snake(lenInit);
  mySnake.initializePositions();
  console.log(mySnake);


  document.onkeydown = function(e) {
    mySnake.changeHeadDir(e.keyCode);
  };
  
  // Initialiser le jeu : afficher le tableau, le fruit et le snake
  function startGame () {
    var boardDiv = document.getElementById("board-game");
    boardDiv.innerHTML = createBoard(boardDim);
     mySnake.drawSnake();
     drawFruit();
  };
  

  function updateBoard() {
    console.log(mySnake.body);
    mySnake.moveSnake();
    console.log(mySnake.body);
    mySnake.drawSnake();

  }

  function grow(){
    mySnake.grow();
  }

  $(".button-start-game").click(function() {
    startGame();
    // mySnake.grow();
    setInterval(grow,2000);
    // updateBoard();
    setInterval(updateBoard,200);
  }); 


});
