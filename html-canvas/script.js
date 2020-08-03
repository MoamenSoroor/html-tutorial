function canvas1Drawing() {
  var canvas = document.getElementById("canvas1");
  var context = canvas.getContext("2d");

  context.fillStyle = "#F00";
  context.fillRect(10, 10, 200, 200);

  context.fillStyle = "#FF0";
  context.fillRect(20, 20, 80, 80);

  context.fillStyle = "#0F0";
  context.fillRect(30, 30, 80, 80);

  context.fillStyle = "#0FF";
  context.fillRect(40, 40, 80, 80);

  context.fillStyle = "#000";
}

function drawLine() {
  var c = document.getElementById("canvas2");
  var width = c.width;
  var height = c.height;
  var ctx = c.getContext("2d");

  ctx.fillStyle = "#0f0";
  ctx.fillRect(0, 0, width, height);

  ctx.strockStyle = "#00f";
  ctx.moveTo(0, 0);
  ctx.lineTo(width, height);
  ctx.strock();
}

canvas1Drawing();
drawLine();
