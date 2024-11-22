const message = (txt) => (document.getElementById("message").innerHTML = txt);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const box = canvas.clientWidth / 7;
canvas.width = box * 7;
canvas.height = box * 8;

const apu = new Date().getUTCDay() % 2 == 0 ? "#fff" : "#0007";
const awki = apu == "#fff" ? "#0007" : "#fff";

function makeRect(fill, x, y, w, h) {
  ctx.fillStyle = fill;
  ctx.fillRect(box * x, box * y, box * w, box * h);
}

// CHAKANA
makeRect("#0001", 0, 0, 1, 1);
makeRect("#0001", 6, 0, 1, 1);
makeRect("#0001", 0, 6, 1, 1);
makeRect("#0001", 6, 6, 1, 1);

makeRect("#0001", 3, 0, 1, 7);
makeRect("#0001", 0, 3, 7, 1);

makeRect("#0001", 2, 1, 3, 5);
makeRect("#0001", 1, 2, 5, 3);

// APU
makeRect(apu, 6, 7, 1, 1);
makeRect(awki, 6.25, 7.25, 0.5, 0.5);

// TOTEMS
"#f007 #0f07 #00f7 #0ff7 #ff07 #f0f7"
  .split(" ")
  .forEach((x, i) => makeRect(x, i, 7, 1, 1));

message("Moixllik");
