/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var ancho;
	var largo;
	var perimetro;
	var alambre;

largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);

perimetro = (largo + ancho) * 2;

alambre = perimetro *3;

alert("La cantidad de alambre a comprar es " + alambre);

}
function Circulo () 
{


var perimetro;
var radio;
var alambre;
const PI = 3.14;	

radio = parseInt(document.getElementById("txtIdRadio").value);

perimetro = 2 * PI * radio;

alambre = perimetro * 3;

alert ("La cantidad de alambre que se necesita comprar es "+ alambre);



}
function Materiales () 
{


	var largo;
	var ancho;
	var cemento;
	var cal;
	var area;

	largo = parseInt(document.getElementById("txtIdLargo").value);
	ancho = parseInt(document.getElementById("txtIdAncho").value);

	area = largo * ancho;

	cemento = area*2;
	cal = area*3;

	alert(`Para un contrapiso de ${area}m2 necesito comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal`);
}