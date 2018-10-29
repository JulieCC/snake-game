// CE FICHIER GERE LES TOURS ET LE JEU

// Paramètres du jeu
var boardDim = 15; // dimensions du tableau
var snakeMove; // fréquence à laquelle le serpent avance
var snakeFreq; // fréquence à laquelle le serpent grandit
var bonusFruit; // nombre de points gagnés à chaque fruit croqué

$(document).ready(function() {
  // Create board
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

  // Créer et placer le fruit
  function Fruit() {
    this.x = randomCoordinates(boardDim)[0];
    this.y = randomCoordinates(boardDim)[1];
    this.positionClass = "";
  }

  // créer et mettre en forme le fruit
  var myFruit = new Fruit();
  myFruit.positionClass = formatName([myFruit.x, myFruit.y]);

    // Créer et placer le snake
    var mySnake = new Snake();
    mySnake.moveSnake();
    mySnake.tagSnakeClasses();

function removeClasses() {
    $( ".fruit" ).removeClass("fruit");
    $( ".snake-head" ).removeClass("snake-head");
    $( ".snake-corps" ).removeClass("snake-corps");
    $( ".snake-tail" ).removeClass("snake-tail");
  }

function updateClasses() {
  removeClasses();
    $("#board-game tr ." + myFruit.positionClass).addClass("fruit");
    mySnake.tagSnakeClasses();
    $("#board-game tr ." + mySnake.head.positionClass).addClass("snake-head");
    for (i = 0; i < mySnake.len-1 ; i++) {
      $("#board-game tr ." + mySnake.corps[i].positionClass).addClass(
        "snake-corps"
      );
    }
    $("#board-game tr ." +  mySnake.corps[mySnake.len-2].positionClass).addClass("snake-tail");
  };

  // Initialiser le jeu : afficher le tableau, le fruit et le snake
  var startGame = function() {
    var boardDiv = document.getElementById("board-game");
    boardDiv.innerHTML = createBoard(boardDim);
    // console.log(mySnake);
  };

function updateBoard(){
  mySnake.moveSnake();
  mySnake.updateDir();
  updateClasses();
}

function grow (){
  mySnake.grow();
  // updateClasses();
}

  $(".button-start-game").click(function() {
    startGame();
    console.log(mySnake);
    // setInterval(grow,2000);
    updateClasses();
    // grow();
    console.log(mySnake);
    setInterval(updateBoard, 1000);


    
  }); // end of button-start-game-click


  document.onkeydown = function(e) {
        mySnake.changeHeadDir(e.keyCode);
  };
  

}); // end of document ready
