function getLoteryGame(dozens) {
  var listToPlay = [];
  var usedNumbers = [];
  var randomNumber;

  for (var i = 0; i < dozens; i++) {
    randomNumber = Math.floor(Math.random() * 60 + 1);
    if (usedNumbers.includes(randomNumber)) {
      i--;
    } else {
      listToPlay[i] = randomNumber;
      usedNumbers[i] = randomNumber;
    }
  }

  listToPlay = listToPlay.sort(function(a, b) {
    return a - b;
  });
  return listToPlay;
}

var addNumer = document.querySelector(".addNumber");
var dozen = document.getElementById("dozen");
var luckyNumbers = document.querySelector(".luckyNumbers");

addNumer.addEventListener("click", function() {
  var luckyGame = getLoteryGame(dozen.value);
  var html = "";
  for (var i = 0; i < luckyGame.length; i++) {
    html += '<div class="lucky-number">' + luckyGame[i] + "</div>";
  }
  luckyNumbers.innerHTML = html;
});
