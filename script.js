var score = 0;
var colorToGuess = null;
var audioElement = null;

function startGame() {
  document.getElementById("game").style.display = "block";
  generateColor();
}

function generateColor() {
  var colors = [
    { name: "Vermelho", code: "#FF0000", audio: "audio/vermelho.mp3" },
    { name: "Verde", code: "#00FF00", audio: "audio/verde.mp3" },
    { name: "Azul", code: "#0000FF", audio: "audio/azul.mp3" },
    { name: "Amarelo", code: "#FFFF00", audio: "audio/amarelo.mp3" },
    { name: "Laranja", code: "#FFA500", audio: "audio/laranja.mp3" },
    { name: "Roxo", code: "#800080", audio: "audio/roxo.mp3" }
  ];
  var randomIndex = Math.floor(Math.random() * colors.length);
  colorToGuess = colors[randomIndex];
  document.getElementById("color-box").style.backgroundColor = colorToGuess.code;

  // Inicializar o elemento de áudio
  audioElement = new Audio(colorToGuess.audio);
}

function playAudio() {
  audioElement.play();
}

function checkColor() {
  var userInput = document.getElementById("color-input").value.toLowerCase();
  if (userInput === colorToGuess.name.toLowerCase()) {
    score += 10;
    document.getElementById("score").textContent = score;
    document.getElementById("message").textContent = "Parabéns, você acertou!";
    document.getElementById("message").className = "correct";
  } else {
    score -= 10;
    document.getElementById("score").textContent = score;
    document.getElementById("message").textContent = "Ops, tente novamente!";
    document.getElementById("message").className = "incorrect";
  }

  if (score === 100) {
    document.getElementById("message").textContent = "Parabéns, você ganhou!";
    document.getElementById("message").className = "";
    document.getElementById("color-input").setAttribute("disabled", "disabled");
    document.getElementById("color-input").value = "";
    document.getElementById("color-input").style.display = "none";
    document.getElementsByTagName("button")[1].style.display = "none";
  } else {
    generateColor();
  }
}
