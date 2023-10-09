function convertirCadena() {
    
    var cadenaIngresada = document.getElementById("cadenaInput").value;
    var resultado = document.getElementById("resultado");

    var cadenaMayusculas = cadenaIngresada.toUpperCase();
    var cadenaMinusculas = cadenaIngresada.toLowerCase();

    resultado.innerHTML = "En mayúsculas: " + cadenaMayusculas + "<br>En minúsculas: " + cadenaMinusculas;
}