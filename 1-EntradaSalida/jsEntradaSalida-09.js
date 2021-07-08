/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


function mostrarAumento()
{


var sueldo;
var Aumento;
var porcentaje;
var resultado;


sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

porcentaje = parseFloat(prompt("Ingrese el porcentaje que quiere aumentar"));


Aumento= (sueldo * porcentaje)/100;
Aumento= parseFloat(Aumento);

resultado = sueldo + Aumento;

document.getElementById("txtIdResultado").value = resultado;


/ejercicio 9 bis mostrar el % por pront/

}


/*ejercicio numero 9, para sacer porsentaje lo dividimos entre el nuevo y luego el 100. tambien lo podemos denotar por 10% igual a 0.1 o . 1



var importe;
var importeAumento;
var nuevoSueldo

importe = parseFloat(document.getElementById("txtIdSueldo").value);
importeAumento=importe * 10 / 100;

nuevoSueldo = importe+importeAumento;

(document.getElementById("txtIdResultado").value) = nuevoSueldo;*/



