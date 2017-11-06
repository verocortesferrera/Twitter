// boton input
var boton = document.getElementById("boton"); //variable llamar boton

//llamar un evento para ingresar por el boton el texto
boton.addEventListener("click", function(){
	//ingresar el textarea
	var texto = document.getElementById("comment").value;
	//limpiar el texto que se ingrese para que no se guarde
	document.getElementById("comment").value = "";

	//llamar al contenedor donde se ira el posteo, area definida en el html
	var post = document.getElementById("posteo");

	// div que contiene cada post se ira a una caja
	var newPost = document.createElement('div');

	//validar que textarea tenga un msje
	if(post.length == 0 || post == null) { // si no hay nada
		alert('Debes ingresar un mensaje');
		return false;// para que se corte ahi la condicion sino sera true y se crea la condicion
	};

	//nodo texto ingresado con texto que se va a ver en nueva seccion
	var textNewPost = document.createTextNode(texto);

	// guardo el texto en un elemento p
	var contenedorElemento = document.createElement('p');

	//uno el elemento p con el nodo de texto ingresado
	contenedorElemento.appendChild(textNewPost);

	//uno el nodo de texto ingresado al div creado
	newPost.appendChild(contenedorElemento);

	//se pasa al contenedor del html
	post.appendChild(newPost);


}, false);

//contador de caracteres
var contenidoTextarea = "";
//permitidos
var numCaracterPermitidos = 140;

function(){ 
   //variable de conteo de caracteres ingresados
	var textoIngresado = document.getElementById("comment").value.length;
	//llamo al contenedor donde ira el conteo
	var caracter= document.getElementById("caracteres");

	if( textoIngresado > numCaracterPermitidos){
		document.getElementById("comment").value = contenidoTextarea;
	}
/*
// creo un nodo texto ingresado 
var numero = document.createTextNode(textoIngresado);

//un elemento p que agarre el numero
var contenedorNumero = document.createElement('p');

//uno el p con nodo ingresado
contenedorNumero.appendChild(numero);
//unir el nodo con el div del html
caracter.appendChild(contenedorNumero)*/

caracter = textoIngresado;


} 