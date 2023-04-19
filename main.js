
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

//función para añadir laimagen del jugador
function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {   //función para subir imagen al lienzo
	player_object = Img; //almacena objeto img, servirá de identificación para la imagen

	player_object.scaleToWidth(150); 
	player_object.scaleToHeight(140);
	player_object.set({   //establecer coordenadas x, y a la imagen
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);  //se añade al lienzo el jugador

	});
}

//para añadir diferentes imágenes según la tecla oprimida
function new_image(get_image)  //get_image contiene la imagen del bloque de acuerdo a tecla que se oprime
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

//----aquí termina la Primera parte

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;  //obtiene el valor de la tecla presionada
console.log(keyPressed);

//verificar si se presiona la tecla shift y p al mismo tiempo
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}

//verificar si se presiona la tecla shift y m al mismo tiempo
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	

	
	if(keyPressed == '87') 
	{
		new_image('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71') 
	{
		new_image('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76') 
	{
		new_image('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84') 
	{
		new_image('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		new_image('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		new_image('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		new_image('cloud.jpg'); 
		console.log("c");
	}
	
}

//--------------Aquí termina la Segunda parte----------
function up()
{
if(player_y >=0)
	{
	player_y = player_y + block_image_height;
	console.log("altura del bloke = " + block_image_height);
	console.log("cuando se presiona la flecha asia arriba , x = " + player_x + " , Y = " + player_y);
	canvas.remove(player_object);
	player_update();
}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura del bloke = " + block_image_height);
		console.log("cuando se presiona la flecha asia arriba , x = " + player_x + " , Y = " + player_y);
		canvas.remove(player_object);
		player_update();	
	}
}
function left()
{
	if(player_x >0)
	{
		player_x = player_x + block_image_width;
		console.log("ancho del bloke = " + block_image_width);
		console.log("cuando se presiona la flecha isquierda , x = " + player_x + " , Y = " + player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("ancho del bloke = " + block_image_width);
		console.log("cuando se presiona la flecha isquierda , x = " + player_x + " , Y = " + player_y);
		canvas.remove(player_object);
		player_update();
	}
}
