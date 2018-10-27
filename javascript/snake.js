// CE FICHIER DEFINIT LE SNAKE ET SON COMPORTEMENT

// Initialiser le snake
var posInit = "right"; // can be settled to 'up', 'down', 'right' or 'left'
var lenInit = 8;

// générer un élément du corps
function SnakeBodyElement(direction) {
  return (element = {
    position: [],
    direction: direction,
  });
}
// générer le tableau du corps avec le bon nombre d'éléments, bien positionés et dans la bonne direction
function generateSnakeBody(direction, snakeLength) {
  var snakeBody = [];
  var bodyElementsNumber = snakeLength - 2; // nombre d'éléments corps = length - tete - head
  for (i = 0; i < bodyElementsNumber; i++) {
    var newElement = new SnakeBodyElement(direction);
    snakeBody.push(newElement);
  }
  return snakeBody;
}

// générer le snake avec tous les éléments et définir les méthodes
function Snake () {
    this.len = lenInit;
    this.head = {
      position: randomCoordinates(boardDim),
      direction: posInit,
    //   positionClass: "",
    };
    this.corps = generateSnakeBody(this.head.direction, this.len);

    this.tail = {
      position: [],
      direction: posInit
    };
    this.type = "type";
  //   this.changeDirection = function() {};
  }

// Positionner les éléments du corps et de la tail en fonction de la tête
Snake.prototype.positionSnakeBody = function() {
  // positionner le premier élément du corps en fonction de la position de la tête et de sa direction
  switch (this.head.direction) {
    case "down":
      this.corps[0].position[0] = this.head.position[0] - 1;
      this.corps[0].position[1] = this.head.position[1];
      break;
    case "up":
      this.corps[0].position[0] = this.head.position[0] + 1;
      this.corps[0].position[1] = this.head.position[1];
      break;
    case "left":
      this.corps[0].position[0] = this.head.position[0];
      this.corps[0].position[1] = this.head.position[1] + 1;
      break;
    case "right":
      this.corps[0].position[0] = this.head.position[0];
      this.corps[0].position[1] = this.head.position[1] - 1;
      break;
  };

  // positionner chaque élément du corps en fonction de l'élément précédent : sa position et sa direction
  for (i = 1; i < this.corps.length; i++) {
    switch (this.corps[i - 1].direction) {
      case "down":
        this.corps[i].position[0] = this.corps[i - 1].position[0] - 1;
        this.corps[i].position[1] = this.corps[i - 1].position[1];
        break;
      case "up":
        this.corps[i].position[0] = this.corps[i - 1].position[0] + 1;
        this.corps[i].position[1] = this.corps[i - 1].position[1];
        break;
      case "left":
        this.corps[i].position[0] = this.corps[i - 1].position[0];
        this.corps[i].position[1] = this.corps[i - 1].position[1] + 1;
        break;
      case "right":
        this.corps[i].position[0] = this.corps[i - 1].position[0];
        this.corps[i].position[1] = this.corps[i - 1].position[1] - 1;
        break;
    };
  };

  // positionner l'élément tail en fonction de la position et de la direction du dernier élément du corps
  switch (this.corps[this.corps.length - 1].direction) {
    case "down":
      this.tail.position[0] = this.corps[this.corps.length - 1].position[0] - 1;
      this.tail.position[1] = this.corps[this.corps.length - 1].position[1];
      break;
    case "up":
      this.tail.position[0] = this.corps[this.corps.length - 1].position[0] + 1;
      this.tail.position[1] = this.corps[this.corps.length - 1].position[1];
      break;
    case "left":
      this.tail.position[0] = this.corps[this.corps.length - 1].position[0];
      this.tail.position[1] = this.corps[this.corps.length - 1].position[1] + 1;
      break;
    case "right":
      this.tail.position[0] = this.corps[this.corps.length - 1].position[0];
      this.tail.position[1] = this.corps[this.corps.length - 1].position[1] - 1;
      break;
  };
};

// Donner les bons noms de classes
Snake.prototype.generatepositionClasses = function (){
    this.head.positionClass =  formatName(this.head.position);
    this.tail.positionClass =  formatName(this.tail.position);
    for(i=0;i<this.corps.length;i++){
        this.corps[i].positionClass =  formatName(this.corps[i].position);
    }
};

// Faire avancer le Snake
Snake.prototype.moveHead = function (){
  console.log('depart :');
  console.log(this.head.position);
  switch (this.head.direction) {
    case "down":
      this.head.position[0] = this.head.position[0] + 1;
      this.head.position[1] = this.head.position[1];
      break;
    case "up":
      this.head.position[0] = this.head.position[0] - 1;
      this.head.position[1] = this.head.position[1];
      break;
    case "left":
      this.head.position[0] = this.head.position[0];
      this.head.position[1] = this.head.position[1] - 1;
      break;
    case "right":
      this.head.position[0] = this.head.position[0];
      this.head.position[1] = this.head.position[1] + 1;
      break;
  };
  console.log('arrivee :');
  console.log(this.head.position);


  return this.head.position;
;}