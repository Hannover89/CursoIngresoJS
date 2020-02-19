function mostrar()
{
	// declarar variables
	var respuesta2= true;
    var minimo;
	var maximo;
    var primeraVez = true
	
	while(respuesta) {

	var numero = prompt("Ingrese un numero");
	    numero = parseInt(numero);
        while (isNaN(numero)) {
			numero= prompt("Error: Ingrese un numero");
			numero = parseInt(numero);

		} 
	  if (primeraVez) {  
		primeraVez = false;
		maximo = numero;
		minimo = numero;
		 
    } else if (numero > maximo); {
	    maximo = numero; 
    }
      if (numero < minimo) {
		minimo = numero;
	}
	 respuesta = confirm("Desea continuar?");
	}	
	document.getElementById("maximo").value
	document.getElementById("minimo").value 





}//FIN DE LA FUNCIÓN