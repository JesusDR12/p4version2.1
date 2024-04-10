function calcula (nombre, niños, cantidad, horario){
	var hora = (horario);
	var name = (nombre);
	var ni = (niños);
	var cant = (cantidad);
	var total = 0;

	if(horario==1){
		total=999.99;
		if(niños>0){
			total=total-(total*.05);
		}
	}
	if(horario==2){
		total=1504.70;
		if(niños>0){
			total=total-(total*.05);
		}
	}
	if(horario==3){
		total=12503.50;
		if(niños>0){
			total=total-(total*.05);
		}
	}	
	
	var newDiv =document.createElement("div");
	var impNombre=document.createTextNode("Nombre: "+name+"-----");
	newDiv.appendChild(impNombre);
	document.body.appendChild(newDiv);
	var impcant=document.createTextNode("Boletos comprados: "+cant+"-----");
	newDiv.appendChild(impcant);
	document.body.appendChild(newDiv);
	var impTp=document.createTextNode("Total a pagar: $"+total+"-----");
	newDiv.appendChild(impTp);
	document.body.appendChild(newDiv);
	var gracias=document.createElement("div");
	gracias.id = "gracias"; // Asignamos un ID al elemento "¡Gracias Por su compra!"
    var impGra = document.createTextNode("¡Gracias Por su compra!");
    gracias.appendChild(impGra);
    document.body.appendChild(gracias);
}
function limpiar() {
    var elementos = document.querySelectorAll('div'); // Seleccionamos todos los elementos <div>

    if (elementos.length === 0) {
        alert("No hay p\xE1rrafos a eliminar");
    } else {
        // Recorremos la lista de elementos y los eliminamos
        elementos.forEach(function(elemento) {
            elemento.parentNode.removeChild(elemento);
        });
    }
}
