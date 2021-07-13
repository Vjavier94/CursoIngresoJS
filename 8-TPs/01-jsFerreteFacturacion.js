/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	suma = precio1 + precio2 + precio3;

	mensaje = "La suma es " + suma;

	alert(mensaje);



}
function Promedio () 
{
var precio1;
var precio2;
var precio3;
var suma;
var mensaje;

precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	
	suma = (precio1 + precio2 + precio3)/3;
	

	mensaje = "El promedio es " + suma;

	alert(mensaje);
}
function PrecioFinal () 
{
	
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var Iva21;
	var importeTotal;

precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

suma = precio1 + precio2 + precio3;
Iva21 = suma * 21/100;

importeTotal= suma + Iva21



alert("El importe con IVA incluido es " + importeTotal);




}