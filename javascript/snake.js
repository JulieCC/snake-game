// CE FICHIER DEFINIT LE SNAKE ET SON COMPORTEMENT

// Créer un élément du serpent
function snakeBodyElement(row, col, direction = "right") {
  return (element = {
    row,
    col,
    direction
  });
}

// Créer le snake = constructeur Snake
function Snake(length) {
  this.len = length;
  this.body = [snakeBodyElement(0, 0)];
  for (var i = 1; i < length - 1; i++) {
    this.body[i] = snakeBodyElement(0, 0);
  }
  this.body.push(snakeBodyElement(0, 0));
}

Snake.prototype.initializePositions = function() {
  this.body[0].row = Math.floor(boardDim / 2);
  this.body[0].col = Math.floor(boardDim / 2);
  for (var i = 1; i < this.body.length; i++) {
    this.body[i].row = this.body[i - 1].row;
    this.body[i].col = this.body[i - 1].col - 1;
  }
};

// Afficher le snake
Snake.prototype.drawSnake = function() {
  $(".snake-head").removeClass("snake-head");
  $(".snake-body").removeClass("snake-body");
  $(".snake-tail").removeClass("snake-tail");

  var mySnakeClasses = [];
  for (var i = 0; i < this.body.length; i++) {
    mySnakeClasses.push(formatName(this.body[i]));
  }

  $("#board-game tr ." + mySnakeClasses[0]).addClass("snake-head");
  $("#board-game tr ." + mySnakeClasses[mySnakeClasses.length - 1]).addClass(
    "snake-tail"
  );
  for (var i = 1; i < mySnakeClasses.length - 1; i++) {
    $("#board-game tr ." + mySnakeClasses[i]).addClass("snake-body");
  }
};

// déplacer les éléments du serpent
Snake.prototype.moveParts = function(elementArray) {
  for (var i = 0; i < elementArray.length; i++) {
    switch (elementArray[i].direction) {
      case "down":
        elementArray[i].row++;
        if (!(elementArray[i].row > -1 && elementArray[i].row < boardDim)) {
          elementArray[i].row -= boardDim;
        }
        break;
      case "up":
        elementArray[i].row--;
        if (!(elementArray[i].row > -1 && elementArray[i].row < boardDim)) {
          elementArray[i].row += boardDim;
        }
        break;
      case "left":
        elementArray[i].col--;
        if (!(elementArray[i].col > -1 && elementArray[i].col < boardDim)) {
          elementArray[i].col += boardDim;
        }
        break;
      case "right":
        elementArray[i].col++;
        if (!(elementArray[i].col > -1 && elementArray[i].col < boardDim)) {
          elementArray[i].col -= boardDim;
        }
        break;
    }
  }
};

//déplacer le snake
Snake.prototype.moveSnake = function() {
  this.moveParts(this.body);

  // mettre à jour les directions
  for (var i = this.body.length - 1; i > 0; i--) {
    this.body[i].direction = this.body[i - 1].direction;
  }

  this.drawSnake();
};

// Changer de direction
Snake.prototype.changeHeadDir = function(keyCode) {
  switch (keyCode) {
    case 37: // left
      this.body[0].direction = "left";
      console.log("turn left");
      break;
    case 38: // up
      this.body[0].direction = "up";
      console.log("turn up");
      break;
    case 39: // right
      this.body[0].direction = "right";
      console.log("turn right");
      break;
    case 40: // down
      this.body[0].direction = "down";
      console.log("turn down");
      break;
  }
};

// Grandir
Snake.prototype.grow = function() {
  var newElement = snakeBodyElement(
    this.body[this.body.length - 1].row,
    this.body[this.body.length - 1].col
  );

  switch (newElement.direction) {
    case "down":
      newElement.row--;
      break;
    case "up":
      newElement.row++;
      break;
    case "left":
      newElement.col++;
      break;
    case "right":
      newElement.col--;
      break;
  }
  this.body[this.len] = newElement;
  this.len++;
  this.drawSnake();
};

// Déterminer la prochaine position de la tete
Snake.prototype.checkFruit = function() {
  var check =
    this.body[0].row == myFruit.row && this.body[0].col == myFruit.col;
  if (check) {
    turnScore += bonusFruit;
    console.log("Bravo ! votre score est : " + turnScore);
    return check;
  }
};

// Arreter le jeu si la tete touche un élément du corps
Snake.prototype.checkBody = function() {
  var check;
  for (var i = 1; i < this.len; i++) {
    check =
      this.body[0].row == this.body[i].row &&
      this.body[0].col == this.body[i].col;
      if(check){ return(check);};
  };

};
