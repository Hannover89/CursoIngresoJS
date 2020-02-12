function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
    var min;
	var max;
	
	min = 1;
	max = 10;
	
  numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;
  if (numeroRandom >= 9) {
	  alert("EXCELENTE")
  } else
   if(numeroRandom >= 5 && numeroRandom < 8){
    alert("APROBÒ")
  } else (numeroRandom < 4) {
("Vamos, la proxima se puede")
  }


}//FIN DE LA FUNCIÓN