/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe
	var importeDescuento
	var descuento
	var nuevoImporte

	importe = parseFloat(document.getElementById("txtIdImporte").value)
    descuento =parseFloat(prompt("Ingrese el porcentaje a descontar"))


    importeDescuento = (importe * descuento) / 100

    nuevoImporte = importe - importeDescuento



    document.getElementById("txtIdResultado").value = nuevoImporte


}
/* var importe
	var importeDescuento
	var nuevoImporte

	importe = parseFloat(document.getElementById("txtIdImporte").value)
    
    importeDescuento = importe * 25 / 100

    nuevoImporte = importe - importeDescuento



    document.getElementById("txtIdResultado").value = nuevoImporte 
    */
