// CE FICHIER GERE LES TOURS ET LE JEU

// UN TOUR //

$(document).ready(function() {
  // paramétrer les joueurs
  createPlayers();

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
  }

  // Créer et placer le fruit
  function Fruit(row = 0, col = 0) {
    (this.row = row), (this.col = col);
  }

  // Créer le fruit de façon aléatoire
  function createFruit() {
    myFruit = new Fruit(
      randomCoordinates(boardDim)[0],
      randomCoordinates(boardDim)[1]
    );
    drawFruit();
  }

  //   Afficher le fruit = foncton drawFruit
  function drawFruit() {
    var myFruitClass = formatName(myFruit);
    $(".fruit").removeClass("fruit");
    $("#board-game tr ." + myFruitClass).addClass("fruit");
  }

  function createSnake() {
    mySnake = new Snake(lenInit);
    mySnake.initializePositions();
    mySnake.drawSnake();
  }

  // Faire grandir le serpent
  function grow() {
    mySnake.grow();
  }

  document.onkeydown = function(e) {
    mySnake.changeHeadDir(e.keyCode);
  };

  // Mettre à jour le serpent : vérifier la position du body et du fruit, déplacer le serpent
  function updateSnake(myPlayer) {
    if (!mySnake.checkBody()) {
      if (mySnake.checkFruit()) {
        createFruit();
      }
      mySnake.moveSnake();
    } else {
      endTurn(myPlayer);
    }
  }

  // clic sur le bouton START
  $(".button-start-game").click(function() {
    startGame(myPlayer);
  }); // fin de la fonction "button-start-game"

      // Initialiser le jeu : afficher le tableau, le fruit et le snake
      function startGame(myPlayer) {
        console.log("fruitID + growingID + snakeID =")
        console.log(fruitID + growingID + snakeID);

        var boardDiv = document.getElementById("board-game");
        boardDiv.innerHTML = createBoard(boardDim);
        createSnake();
        console.log(mySnake);
        createFruit();
  
        console.log("C'est parti "+ myPlayer.name + "!")
        endGame = 0;
        
        if (growingID == 0) {
          growingID = setInterval(grow, snakeFreq);
        }
        if (fruitID == 0) {
          fruitID = setInterval(createFruit, fruitFreq);
        }
        if (snakeID == 0) {
          snakeID = setInterval(function() {
            updateSnake(myPlayer);
          }, snakeMove);
        }
      }

  // LE JEU //

  // Constructeur pour un joueur
  function Player(playerName) {
    return (player = {
      name: playerName,
      score: 0,
      turns: 0
    });
  }

  // Créer les joueurs
  function createPlayers() {
    var name1 = window.prompt("Qui est le premier joueur ?", "");
    var name2 = window.prompt("Qui est le deuxième joueur ?", "");
    player1 = new Player(name1);
    player2 = new Player(name2);
    players = [player1, player2];
    console.log(players);
    myPlayer = player1;
    window.alert(myPlayer.name + ", are you ready ?");
  }

  // Changer de joueur
  function changePlayer(myPlayer) {
    boardDiv = document.getElementById("board-game");
    boardDiv.innerHTML.innerHTML = "";

    switch (myPlayer) {
      case players[0]:
        myPlayer = players[1];
        break;
      case players[1]:
        myPlayer = players[0];
        break;
    }
    window.alert(myPlayer.name + ", it's your turn !");
  }

  // Récap fin de tour
  function endTurn(myPlayer) {
    var totalScore = myPlayer.score + turnScore;
    console.log(
      "Oups... " +
        myPlayer.name +
        ", vous avez perdu. Votre score final est " +
        turnScore +
        ". Votre score total est " +
        totalScore +
        "."
    );
    myPlayer.score = totalScore;
    changePlayer(myPlayer);
  }
}); // end of document ready
