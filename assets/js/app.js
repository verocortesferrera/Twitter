// boton input
var boton = document.getElementById("boton"); //variable llamar boton



//llamar un evento para ingresar por el boton el texto
boton.addEventListener("click", function(){

	//ingresar el textarea
	var texto = document.getElementById("comment").value;
	
	//limpiar el texto que se ingrese para que no se guarde se llama desde el coument.
	document.getElementById("comment").value = "";

	//llamar al contenedor donde se ira el posteo, area definida en el html
	var post = document.getElementById("posteo");

	// div que contiene cada post se ira a una caja
	var newPost = document.createElement("div");

	//si el texto esta vacio no dejar twittear
	if(texto.length == 0 || texto == null) { // si no hay nada
			//desabilita el boton
			return boton.disabled = true;// para que se corte ahi la condicion sino sera true y se crea la condicion
	
		} else{

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

	//traer la hora
    var dato = new Date();
    var hh = dato.getHours();
    var mm = dato.getUTCMinutes();

   //Nodo de texto con hora 
    var textHora = document.createTextNode(hh + ':' + mm);

   //poner la hora en un nuevo elemento p
    var time = document.createElement("p");

    //agregar texto al p creado
    time.innerText = "hora: ";

   //agregar el tiempo en el elemento p creado
    time.appendChild(textHora);
    //agregar al div padre que aparece al postear
    newPost.appendChild(time);


	//limpiar caracter, resetear a 140
	document.getElementById("limite").innerHTML = "140";

	


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

 	//Si pasa los 140 caracteres, deshabilitar el botón.
 	if(caracter >= 141){
 			return boton.disabled = true;
 		} else{
 			return boton.disabled = false;
 		};
 	//tiene q ser numero para que funcione
 	//  si quedan  de 20 acaracteres cambiar color del texto
 	if(caracter >= 120 && caracter < 130){
 			limite.style.color = "red";
 		//limiteInicial.classList.add("red");
 		//limiteInicial.setAttribute('class', 'red');
 		} else if(caracter >= 130){
 			limiteInicial.classList.add("blue");
 		};
 	
 	

 };

// funcion para agrandar el div cuendo se escriba

//llamo al comment
var textarea = document.getElementById("comment");
//establecer limite
var limite = 150;

//generar una funcion basada en el input del textarea
textarea.oninput = function() {
	//textarea la altura vacia(auto en css)
  textarea.style.height = "";
  //agoritmo 
  textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
};