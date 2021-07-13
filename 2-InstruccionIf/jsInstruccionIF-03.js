
	function mostrar()
{
	//tomo la edad  

var edad;

edad = parseInt(document.getElementById("txtIdEdad").value);

if ( edad >= 18 ){
	alert("Es mayor de edad");}
else if(edad <=17){
	alert("Esta persona es menor de edad");
}
}
