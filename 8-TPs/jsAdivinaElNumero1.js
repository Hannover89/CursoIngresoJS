/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var min;
var max;
var numeroIngresado;
contadorIntentos = 0;

function comenzar()
{
  
  min= 1;
  max = 101;
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
  numeroSecreto = Math.floor(Math.random() * (max- min)) + min;
  numeroIngresado = document.getElementById("numero").value;
  console.log(numeroSecreto)
}

function verificar()
{
  contadorIntentos = contadorIntentos + 1;
  document.getElementById("intentos").value = contadorIntentos
	
  if (numeroSecreto = numeroIngresado) {
    alert ("Usted es un ganador!! y en" + contadorIntentos + "intentos"); 
  } else {
    if (numeroIngrsado > numeroSecreto) {
      alert("Se paso");
    } else {
      if (numeroIngresado < numeroSecreto){
      alert("Falta"); 
    }
    }

  }
	
}