let game_card = document.querySelector(".game-card");
let game_squares = document.getElementsByClassName("btn");

for (let i = 0; i <= 8; i++) {
  game_squares[i].addEventListener("click", function () {
    game_squares[i].classList.add("blue");
  });
}
game_card.addEventListener("click", function () {
  for (let i = 0; i <= 8; i++) {
    if (game_squares[i].classList.contains("blue")) {
      game_squares[i].classList.add("red");
    }
  }
});
