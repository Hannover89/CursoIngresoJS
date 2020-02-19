function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta=true;
    var sumaDePositivos = 0;
	var contadorDePositivos = 0;
	var sumaDeNegativos = 0;
    var contadorDeNegativos = 0;
    var contadorCeros = 0;
    var contadorDePares = 0;
    var promedioDePositivos;
	var promedioDeNegativos;
    var diferenciaPositivosYNegativos;
	
	while(respuesta) {

		var numero = prompt("Ingrese un numero");

		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Error: Ingrese un numero valido.");
			numero = parseInt(numero);
		} 

		if (numero > 0) {
			// punto 2
			sumaPositivos += numero;
			// punto 3
			contadorPositivos++;
		} else if (numero < 0) {
			// punto 1
			sumaNegativos += numero;
		    // punto 4
			contadorNegativos++;
	} else { 
			contadorCeros++;
            // punto 5
		} 
        
		if (numero % 2 == 0) {
            contadorDePares++;
		}
 	    
		 respuesta = confirm("Desea continuar?");
	} // fin while 


    // Punto 7
	promedioDePositivos = sumaDePositivos / contadorDePositivos;

	// Punto 8
	promedioDeNegativos = sumaDeNegativos / contadorDeNegativos;

	// Punto 9
    diferenciaPositivosYNegativos = sumaDePositivos - sumaDeNegativos;

	document.write("Promedio de positivos: " + promedioDePositivos + "<br>");
	document.write("Promedio de negativos: " + promedioDeNegativos + "<br>");
	document.write("Suma de Positivos " + sumaDePositivos + "<br>");
	document.write("Suma de Negativos " + sumaDeNegativos + "<br>");
	document.write("Contador de Positivos " + contadorDePositivos + "<br>");
	document.write("Contador de Negativos " + contadorDeNegativos + "<br>");
	document.write("Contador de Ceros " + contadorCeros + "<br>");
	document.write("Contador numero pares " + contadorNumeroPares + "<br>");
	document.write("Diferencia entre positivos y negativos " + diferenciaPositivosYNegativos + "<br>");




}//FIN DE LA FUNCIÓN