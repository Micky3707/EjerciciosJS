function validarn(e){
	//body... por parte del teclado
	var teclado = (document.all)?e.keyCode:e.which;
	if(teclado == 8)return true;
	var patron = /[0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}


function interes(){
	var valor = document.Ejercicio1.cantidad.value;
	var cantidad = parseInt(valor);
	var interes = 0.089*cantidad;
	var total = cantidad+interes;

	document.Ejercicio1.interesi.value = "$"+ interes;
	document.Ejercicio1.sueldo.value = "$"+ total;
}

function calcularSueldo(){
	var sueldoBase = parseInt(document.Ejercicio2.SueldoBase.value);
	var Venta = parseInt(document.Ejercicio2.V1.value);
	var comisiones = parseInt(document.Ejercicio2.V1.value)*0.10 + parseInt(document.Ejercicio2.V2.value)*0.10 + parseInt(document.Ejercicio2.V3.value)*0.10;
	sueldoBase = (sueldoBase + Venta*0.10);

	var Venta = parseInt(document.Ejercicio2.V2.value);

	sueldoBase = (sueldoBase + Venta*0.10);
	
	var Venta = parseInt(document.Ejercicio2.V3.value);

	sueldoBase = (sueldoBase + Venta*0.10);

	document.Ejercicio2.SueldoTotalis.value = "$" + sueldoBase;
	document.Ejercicio2.Comisiones.value = "$" + comisiones;
}

function totalCompra(){
	var compraBase = parseInt(document.Ejercicio3.Valor.value);
	
	compraBase = compraBase*0.85;

	document.Ejercicio3.TotalCompra.value = "$" + compraBase;
}

function calificacionTotal(){
	var totalCalif = parseInt(document.Ejercicio4.Calif1.value) + parseInt(document.Ejercicio4.Calif2.value) + parseInt(document.Ejercicio4.Calif3.value);
	var totalExamen = parseInt(document.Ejercicio4.EF.value);
	var totalTFinal = parseInt(document.Ejercicio4.TF.value);
	totalCalif = (totalCalif/3)*0.55 + (totalTFinal*0.15) + (totalExamen*0.30);
	document.Ejercicio4.TotalCalificacionUwU.value = totalCalif;
}

function PHM(){
	var Hombres = parseInt(document.Ejercicio5.Hombres.value);
	var Mujeres = parseInt(document.Ejercicio5.Mujeres.value);
	var totalAlumnos = Hombres + Mujeres;
	document.Ejercicio5.PHombres.value = "%" + (Hombres/totalAlumnos*100);
	document.Ejercicio5.PMujeres.value = "%" + (Mujeres/totalAlumnos*100);
}

function edad(){
	var ano = parseInt(document.Ejercicio6.Ano.value);
	var dia = parseInt(document.Ejercicio6.Dia.value);
	var mes = parseInt(document.Ejercicio6.Mes.value);
	var sis = -1;

	if(mes<3){
		if(dia<26){
			sis = 1;
		}
	}
	var edad = (2020-ano)+sis;

	document.Ejercicio6.Edad.value = edad + "Años";
}