
var pickAColor = document.getElementById("pick_a_color")
var square = document.getElementById("drawing_area");
var paper = square.getContext("2d");
var mouseState = false;
var xi;
var yi;

paper.fillStyle='#ffebee';
paper.fillRect(0,0,square.width,square.height);

square.addEventListener("mousedown", startDrawingMouse);
square.addEventListener("mousemove",moveMouse);
square.addEventListener("mouseup", stopMouse);

function startDrawingMouse(evento){
		mouseState = true;
		xi = evento.layerX;
		yi = evento.layerY;
}

function moveMouse(evento){
	var xf = evento.layerX;
	var yf = evento.layerY;
	if(mouseState){
		drawingLine(pickAColor.value, xi, yi, xf, yf, paper);
		xi = xf;
    	yi = yf;
	}
}

function stopMouse(){
	mouseState = false;
}

function drawingLine(color, x1, y1, x2, y2, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = "3"
	lienzo.moveTo(x1,y1);
	lienzo.lineTo(x2,y2);
	lienzo.stroke();
	lienzo.closePath();
}