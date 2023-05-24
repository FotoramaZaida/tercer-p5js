//declaracion de variables
keyIsPressed = true;
let tamañoCuadrado;
let anchoBorde;
let colorRelleno;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (mouseIsPressed) {
    background(209, 220, 235);
  } else {
    background(187, 143, 206);
  }
  // si se presiona el mouse el fondo cambia de color.
  strokeWeight(8);
  stroke(0);
  console.log("x:" + mouseX + "y:" + mouseY);
  anchoBorde = random(2,4);
  tamañoCuadrado = random(10, 125);
  colorRelleno = random(0,255);
  frameRate(30);
  
  //Cuadrado rojo
  push();
  //IF cambio de color de rojo alazul al presionar el teclado
  if (keyIsPressed) {
    fill(19, 36, 106);
  } else {
    fill(195, 49, 29);
  }
  //----translate,rotate.
  translate(150, 50);
  translate(p5.Vector.fromAngle(millis() / 500, 100));
  rotate(PI / 3.0);
  fill(255, 0, 0);
  //IF cambio de color de rojo alazul al presionar el teclado
  if (keyIsPressed) {
    fill(19, 36, 106);
  } else {
    fill(195, 49, 29);
  }
  rect(0, 0, 250, 250);
  pop();

  //cuadrado negro grande
  push();
  /*IF cambio de color relleno al presionar el teclado del negro      al gris.
  if (keyIsPressed) {
    fill(100);
  } else {kjj
    fill(0);
  }*/
  frameRate(10);
  strokeWeight(anchoBorde);
  fill(colorRelleno);
  rect(60, 310,tamañoCuadrado);
  pop();

  //rectangulos grises
  //al posar el mouse sobre los rectangulos grises cambia a color verde
  if (mouseX > 184 && mouseX < 310 && mouseY > 310 && mouseY < 430) {
    fill(32, 150, 77);
  } else {
    fill(188, 197, 205);
  }
  rect(185, 310, 125, 62);
  rect(185, 372, 125, 62);

  //rectangulos gris claros

  fill(227, 227, 225);
  rect(310, 185, 75, 125);
  rect(385, 185, 75, 125);
  rect(310, 310, 150, 62);

  //rectangulo amarillo
  //IF cambio de color rectangulo amarillo a negro al presionar el teclado
  if (keyIsPressed) {
    fill(0);
  } else {
    fill(234, 193, 72);
  }
  rect(310, 60, 150, 125);

  //rectangulo azul
  //IFcambio de color del relleno al presionar el teclado del azul al amarillo
  if (keyIsPressed) {
    fill(234, 193, 72);
  } else {
    fill(19, 36, 106);
  }
  
  rect(mouseX, mouseY, 150, 95);
  noStroke();
  rect(10, 299, 30, 30);
  rect(20, 25, 34, 34);

  //rectangulo pequeño negro
  fill(0);
  rect(189, 434, 120, 37);

  //cuadrado amarillo sin contorno
  //IF cambio de color rectangulos amarillos al rojo presionando el teclado
  if (keyIsPressed) {
    fill(195, 49, 29);
  } else {
    fill(234, 193, 72);
  }
  noStroke();
  rect(308, 0, 155, 56);
  rect(0, 370, 56, 180);

  //lineas verticales
  strokeWeight(8);
  stroke(0);
  line(123, 60, 123, 20);
  line(60, 435, 60, 475);
  line(310, 60, 310, 20);
  line(460, 56, 460, 20);

  //lineas horizontales
  line(20, 60, 60, 60);
  line(20, 185, 56, 185);
  line(20, 373, 56, 373);
  line(462, 372, 490, 372);

  //cuadrado gris claro sin contorno
  noStroke();
  fill(227, 227, 225);
  rect(126, 0, 181, 56);
  rect(0, 63, 56, 119);

  //cuadrado rojo sin contorno
  fill(195, 49, 29);
  rect(464, 375, 38, 178);

  //lineas finas verticales
  strokeWeight(2);
  stroke(0);
  line(20, 400, 20, 20);
  line(30, 400, 30, 20);
  line(480, 20, 480, 480);
  line(470, 30, 470, 470);
  line(50, 120, 50, 305);
  line(490, 490, 490, 200);
  line(185, 400, 185, 500);
  line(180, 400, 180, 500);
  line(10, 300, 10, 500);

  //lineas finas horizontales
  line(10, 30, 300, 30);
  line(10, 40, 300, 40);
  line(10, 310, 56, 310);
}
