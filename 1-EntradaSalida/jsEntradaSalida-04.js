/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombre,mensaje;

	Nombre=prompt("Ingresa su nombre");

	mensaje="su nombe es:" + Nombre;

	document.getElementById("txtIdNombre").value=mensaje;
	
}

