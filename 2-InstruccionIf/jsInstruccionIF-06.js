function mostrar()
{
	//tomo la edad  

	var edad

	edad = parseInt(document.getElementById("txtIdEdad").value);


if ( edad >=18){
	alert("Es mayor de edad");
}
else if (edad <=17 && edad >=13){
	alert("Es un adolescentes");
}
else {
	alert("esta persona es menor de edad");
}
	



}//FIN DE LA FUNCIÓN