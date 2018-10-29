// CE FICHIER DEFINIT LE SNAKE ET SON COMPORTEMENT

// Initialiser le snake
var posInit = "right";
var lenInit = 6;

// générer un élément du corps
function SnakeBodyElement(direction, pos) {
  return (element = {
    position: pos,
    direction: direction
  });
}
// générer le tableau du corps avec le bon nombre d'éléments, bien positionés et dans la bonne direction
function generateSnakeBody(direction, len) {
  var snakeBody = [];
  for (i = 0; i < len; i++) {
    var newElement = new SnakeBodyElement(direction, []);
    snakeBody.push(newElement);
  }
  return snakeBody;
}

// générer le snake avec tous les éléments ayant chacun la direction "right" et une position
function Snake() {
  this.len = lenInit;
  this.head = {
    position: randomCoordinates(boardDim),
    direction: posInit
  };

  this.corps = generateSnakeBody(posInit, lenInit - 1);
  this.corps[0].position[0] = this.head.position[0];
  this.corps[0].position[1] = this.head.position[1] - 1;

  for (i = 1; i < this.corps.length; i++) {
    this.corps[i].position[0] = this.corps[i - 1].position[0];
    this.corps[i].position[1] = this.corps[i - 1].position[1] - 1;
  }
}

// Faire avancer le serpent
Snake.prototype.moveSnake = function() {
  // lister les éléments à bouger
  var snakeParts = [];

  snakeParts.push(this.head);
  for (i = 0; i < this.corps.length; i++) {
    snakeParts.push(this.corps[i]);
  }
  // console.log(snakeParts);

  var moveParts = function(parts) {
    for (i = 0; i < parts.length; i++) {
      switch (parts[i].direction) {
        case "down":
          parts[i].position[0]++;
          break;
        case "up":
          parts[i].position[0]--;
          break;
        case "left":
          parts[i].position[1]--;
          break;
        case "right":
          parts[i].position[1]++;
          break;
      }
    }
  };
  moveParts(snakeParts);
};

// Donner les bons noms de classes
Snake.prototype.tagSnakeClasses = function() {
  this.head.positionClass = formatName(this.head.position);
  for (i = 0; i < this.len - 1; i++) {
    this.corps[i].positionClass = formatName(this.corps[i].position);
  }
};

// Changer de direction pour la tête
Snake.prototype.changeHeadDir = function(keyCode) {
  switch (keyCode) {
    case 37: // left
      this.head.direction = "left";
      console.log("turn left");
      break;
    case 38: // up
      this.head.direction = "up";
      console.log("turn up");
      break;
    case 39: // right
      this.head.direction = "right";
      console.log("turn right");
      break;
    case 40: // down
      this.head.direction = "down";
      console.log("turn down");
      break;
  }
};

// Udapte des directions
Snake.prototype.updateDir = function() {
  for (i = this.corps.length - 1; i > 0; i--) {
    this.corps[i].direction = this.corps[i - 1].direction;
  }
  this.corps[0].direction = this.head.direction;
};

// Faire grandir le serpent
Snake.prototype.grow = function() {
  // this.corps[this.len-1] = this.corps[this.len - 2];
  // var dir = this.corps[this.len-2].direction;
  // var pos = this.corps[this.len-2].position;

  // console.log("direction et position de tail :");
  // console.log(dir);
  // console.log(pos);

  // switch (dir) {
  //   case "down":
  //     pos[0]++;
  //     break;
  //   case "up":
  //     pos[0]--;
  //     break;
  //   case "left":
  //     pos[1]++;
  //     break;
  //   case "right":
  //     pos[1]--;
  //     break;
  // }

  // console.log("direction et position de tail :");
  // console.log(dir);
  // console.log(pos);

  this.len++;
  this.corps[this.len - 1] = SnakeBodyElement("right", [1, 1]);
  console.log(formatName(this.corps[this.len - 1].position));
  // this.tagSnakeClasses();
  // this.corps[this.len-1].positionClass = formatName(this.corps[this.len-1].position);
  // this.updateSnakeClasses();
};
