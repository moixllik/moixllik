const keys = `
\`1234567890[]
',.pyfgcrl/=\\
aoeuidhtns-
<;qjkxbmwvz
~!@#$%^&*(){}
"<>PYFGCRL?+|
AOEUIDHTNS_
>:QJKXBMWVZ
¸|˛˘¦˝
àèìòù
ãẽĩõũñ
áéíóú
äëïöü
ąęįǫų
ăĕĭŏŭ
őű
ç
ė
`.replace("\n", "");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const box = window.innerHeight / 4;
var img = new Image();
const random = (_) => Math.floor(Math.random() * keys.length);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function makeKeyboard() {
  img.src = "keyboard.png";
  img.onload = (_) => {
    const h = Math.min(200, box * 1.5);
    const w = Math.min(590, (window.innerWidth / 200 / 1.3) * h);
    ctx.drawImage(img, (canvas.width - w) / 2, canvas.height - h, w, h);
  };
}

let current = "";
function start() {
  current = keys[random()];

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff2";
  ctx.fillRect((canvas.width - box) / 2, box, box, 5);

  ctx.fillStyle = "#f0f";
  ctx.font = box + "px Arial";
  ctx.fillText(current, (canvas.width - box * 0.5) / 2, box);

  ctx.fillStyle = "#ff0";
  ctx.font = box / 4 + "px Arial";
  ctx.fillText(
    current.charCodeAt(0),
    (canvas.width - box * 0.5) / 2,
    box * 1.5,
  );

  makeKeyboard();
}

document.getElementById("input").addEventListener("keyup", (event) => {
  console.log(event);
  const inp = event.target;
  if (inp.value == current) start();
  if (event.key != "Dead") inp.value = "";
});

start();
