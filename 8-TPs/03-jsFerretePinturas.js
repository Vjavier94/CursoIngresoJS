/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
	var centigrados;
	

	temperaturaF = parseFloat(document.getElementById("txtIdTemperatura"). value);

		centigrados = (temperaturaF - 32) / 1.8;

		alert(`${temperaturaF} grados Fahrenheit equivalen a ${centigrados.toFixed(4)} grados Centigrados `);




}

function CentigradosFahrenheit () 
{
	var centigrados;
	var temperaturaF;

	centigrados = parseFloat(document.getElementById("txtIdTemperatura"). value);

	temperaturaF = centigrados * 1.8 + 32;

	alert(`${centigrados} grados Centigrados equivalen a ${temperaturaF.toFixed(4)} grados Fahrenheit `);
}
