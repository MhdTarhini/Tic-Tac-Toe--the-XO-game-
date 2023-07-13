let start = document.querySelector(".start-game");

start.addEventListener("click", function () {
  let landing_page = document.querySelector(".container");
  landing_page.classList.add("display-none");
  let game_page_player = document.querySelector(".player-sccore");
  game_page_player.classList.remove("display-none");
  let game_container = document.querySelector(".game");
  game_container.classList.remove("display-none");
  const player_1 = document.querySelector("#player-1").value;
  var player_2 = document.querySelector("#player-2").value;
  document.querySelector(".player-1-name").innerHTML = player_1;
  document.querySelector(".player-2-name").innerHTML = player_2;
});

let game_card = document.querySelector(".game-card");
let game_squares = document.getElementsByClassName("btn");

let counter = 1;
let check_Status = 0;
for (let i = 0; i <= 8; i++) {
  game_squares[i].addEventListener("click", function () {
    counter += 1;
    if (counter % 2 === 0) {
      game_squares[i].innerHTML = "X";
    } else {
      game_squares[i].innerHTML = "O";
    }
    check_Status += 1;
    check_winner();
  });
}

function check_winner() {
  console.log("check");
  for (let i = 0; i <= 8; i++) {
    let checker = 1;
    if (i <= 2) {
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${j}.row-${checker}`);
        if (square_row.innerHTML !== "") {
          winning_counter(square_row.textContent);
        }
      }
      winning_counter("NO WiNNER");
      checker += 1;
    } else if (i <= 5 && i > 2) {
      checker = 1;
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${checker}.row-${j}`);
        if (square_row.textContent !== "") {
          winning_counter(square_row.textContent);
        }
      }
      winning_counter("NO WiNNER");
      checker += 1;
    } else if (i === 6) {
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${j}.row-${j}`);
        if (square_row.innerHTML !== "") {
          winning_counter(square_row.textContent);
        }
      }
      winning_counter("NO WiNNER");
    } else {
      checker = 3;
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${checker}.row-${j}`);
        if (square_row.innerHTML !== "") {
          winning_counter(square_row.textContent);
        }
        checker -= 1;
      }
      winning_counter("NO WiNNER");
    }
  }
}

let winning_counter_X = 0;
let winning_counter_O = 0;
function winning_counter(square) {
  if (square === "X") {
    winning_counter_X += 1;
  } else if (square === "O") {
    winning_counter_O += 1;
  } else {
    winning_counter_X = 0;
    winning_counter_O = 0;
  }
  if (winning_counter_X === 3) {
    the_winner("X");
  } else if (winning_counter_O === 3) {
    the_winner("Y");
  }
}

function the_winner(result, sccore) {
  let winner_display = document.querySelector(".winner");
  if (result === "X") {
    winner_display.innerHTML =
      document.querySelector(".player-1-name").innerHTML;
    document.querySelector(".player-1-sccore").innerHTML += 1;
  } else {
    winner_display.innerHTML =
      document.querySelector(".player-2-name").innerHTML;
    document.querySelector(".player-2-sccore").innerHTML += 1;
  }
}
