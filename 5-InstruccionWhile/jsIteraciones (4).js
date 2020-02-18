function mostrar()
{
var numero = 15;

while (numero < 0 || numero > 9 || isNaN(numero)) {
numero = prompt("Ingrese un numero valido");

	numero = parseInt(numero);

	console.log(numero);
	console.log(isNaN(numero));
}

}//FIN DE LA FUNCIÓN