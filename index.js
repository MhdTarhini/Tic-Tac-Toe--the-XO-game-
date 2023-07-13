let start = document.querySelector(".start-game");

start.addEventListener("click", startGame)
function startGame () {
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
};

let game_card = document.querySelector(".game-card");
let game_squares = document.getElementsByClassName("btn");

let counter = 1;
for (let i = 0; i <= 8; i++) {
    game_squares[i].addEventListener("click", function () {
        counter += 1;
        if(game_squares[i].innerHTML===""){
            if (counter % 2 === 0) {
                game_squares[i].innerHTML = "X";
            } else {
                game_squares[i].innerHTML = "O";
            }
            check_winner();
        }
    });
}

var check_Status = 0;
function check_draw(done) {
  check_Status += 1;
  if (check_Status === 9) {
    check_Status = 0;
    winning_counter(undefined,"draw");
  }else if (done){
    check_Status=0
  }
}
function check_winner() {
    check_draw();
  let checker_row = 1;
  let checker_col = 1;
  let checker_diag= 3;
  for (let i = 0; i <8; i++) {
    if (i <= 2) {
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${j}.row-${checker_row}`);
        if (square_row.innerHTML !== "") {
          winning_counter(square_row);
        }
      }
      winning_counter("NO WiNNER");
      checker_row += 1;
    } else if (i <= 5 && i > 2) {
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${checker_col}.row-${j}`);
        if (square_row.textContent !== "") {
          winning_counter(square_row.textContent);
        }
      }
      winning_counter("NO WiNNER");
      checker_col += 1;
    } else if (i === 6) {
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${j}.row-${j}`);
        if (square_row.innerHTML !== "") {
          winning_counter(square_row);
        }
      }
      winning_counter("NO WiNNER");
    } else {
      for (let j = 1; j <= 3; j++) {
        let square_row = document.querySelector(`.col-${checker_diag}.row-${j}`);
        if (square_row.innerHTML !== "") {
          winning_counter(square_row);
        }
        checker_diag -= 1;
    }
      winning_counter("NO WiNNER");
    }
  }
}

let winning_counter_X = 0;
let winning_counter_O = 0;
let array = []
function winning_counter(square,string) {
  if (square!==undefined && square.textContent === "X") {
    winning_counter_X += 1;
    array.push(square);
  } else if ((square !== undefined && square.textContent) === "O") {
    winning_counter_O += 1;
    array.push(square);
  } else if (string === "draw") {
    the_winner("draw");
    check_draw(true);
  } else {
    winning_counter_X = 0;
    winning_counter_O = 0;
    array.splice(0, array.length)
  }
  if (winning_counter_X === 3) {
    the_winner("X", array);
    check_draw(true)
  } else if (winning_counter_O === 3) {
    the_winner("O", array);
    check_draw(true);

  }
}

function the_winner(result, array) {
  let winner_display = document.querySelector(".winner");
  winner_display.classList.remove("display-none");
  if (result === "X") {
    winner_display.innerHTML = `${
      document.querySelector(".player-1-name").innerHTML
    } is the winner`;
    let sccore =
      parseInt(document.querySelector(".player-1-sccore").textContent) + 1;
    document.querySelector(".player-1-sccore").innerHTML = sccore;
  } else if (result === "O") {
    winner_display.innerHTML = `${
      document.querySelector(".player-2-name").innerHTML
    } is the winner`;
    let sccore =
      parseInt(document.querySelector(".player-2-sccore").textContent) + 1;
    document.querySelector(".player-2-sccore").innerHTML = sccore;
  } else {
    winner_display.innerHTML = "Draw";
  }
  if(winner_display.innerHTML!=="Draw"){
    for(let i=0 ; i<=2 ;i++){
        array[i].classList.add("animation");
    }
  }
  let game_container = document.querySelector(".game");
  game_container.classList.add("stop");
  let new_game = document.querySelector(".new-game");
  new_game.classList.remove("display-none");
}

let new_game = document.querySelector(".new-game");
new_game.addEventListener("click", startNewGame)

function startNewGame() {
  let winner_display = document.querySelector(".winner");
  if(winner_display.innerHTML!=="Draw"){
      let square_animation=document.querySelectorAll(".animation")
          for(i=0;i<=2;i++){
              square_animation[i].classList.remove("animation")
          }
  }
  winning_counter("RESTART");
  for (let i = 0; i <= 8; i++) {
    game_squares[i].innerHTML = "";
  }
  let game_container = document.querySelector(".game");
  game_container.classList.remove("stop");
  let new_game = document.querySelector(".new-game");
  new_game.classList.add("display-none");
  winner_display.classList.add("display-none");
};