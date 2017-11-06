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
	var newPost = document.createElement("div");

	//si el texto esta vacio no dejar twittear
	if(texto.length == 0 || texto == null) { // si no hay nada
		
		return document.getElementById("boton").disabled = true;// para que se corte ahi la condicion sino sera true y se crea la condicion
	};

	//nodo texto ingresado con texto que se va a ver en nueva seccion
	var textNewPost = document.createTextNode(texto);

	// guardo el texto en un elemento p
	var contenedorElemento = document.createElement("p");

	//uno el elemento p con el nodo de texto ingresado
	contenedorElemento.appendChild(textNewPost);

	//uno el nodo de texto ingresado al div creado
	newPost.appendChild(contenedorElemento);

	//se pasa al contenedor del html
	post.appendChild(newPost);

	


}, false);


//calcular caracteres

 comment.onkeyup = function(){ //detecta el uso del teclado
 	//obtengo el texto en p
 	var limiteInicial = document.getElementById("limite");
 	//obtengo el input del texarea
	var comment = document.getElementById("comment");
 	//calculo el largo del input(number)
 	var caracter = comment.value.length;
 	//PARA TRANSFORMAR EL NUMERO A TEXTO SE SUMA UN NUMERO AL TEXTO VACIO!!
 	limiteInicial.innerText = "" + (140 - caracter);
 }