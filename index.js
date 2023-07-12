let game_card = document.querySelector(".game-card");
let game_squares = document.getElementsByClassName("btn");


let counter = 1;

for (let i = 0; i <= 8; i++) {
  game_squares[i].addEventListener("click", function () {
    counter += 1;
    if (counter % 2 === 0) {
      game_squares[i].innerHTML = "X";
    } else {
      game_squares[i].innerHTML = "O";
    }

    if (counter === 10) {
      check_winner();
    }
  });
}

function check_winner() {
  for (let i = 0; i <= 7; i++) {
    let counter = 1;
    if (i !== 2) {
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${j}.row-${counter}`);
        if (square_row.innerHTML !== "") {
          winning_counter(square_row);
        }
      }
      counter += 1;
    } else if (i <= 5) {
      counter -= 3;
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${counter}.row-${j}`);
        if (square_row.innerHTML !== "") {
          winning_counter(square_row);
        }
      }
      counter += 1;
    } else {
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${j}.row-${j}`);
        if (square_row.innerHTML !== "") {
          winning_counter(square_row);
        }
      }
    }
  }
}

function winning_counter(square) {
  //   let winning_counter_X = 0;
  //   let winning_counter_Y = 0;
  //   if (square.innerHTML === "X") {
  //     winning_counter_X += 1;
  //   } else {
  //     winning_counter_Y += 1;
  //   }
  console.log(square.innerHTML);
}