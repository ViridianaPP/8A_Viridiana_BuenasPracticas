// ============================================
// HARDCODE
// ============================================

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
// HARDCODE

// Configuración del sistema
//Hardcode

//Impresión de mensajes de salida

// Función principal de inicialización
function inicializar() {
    //Impresión de mensajes de salida
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    //Impresión de mensajes de salida
}

// Función para guardar un registro
function guardarRegistro() {
    //Impresión de mensajes de salida
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    //Impresión de mensajes de salida
    // Expresiones regulares de validación
    var regexNombre = /^[A-Za-zÁÉÍÓÚÑáéíóú\s]{2,50}$/;
    var regexTelefono = /^[0-9]{10}$/;
    var regexCurp = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9A-Z][0-9]$/;
    var regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    var errores = [];

    // Validaciones de campos
    if (!regexNombre.test(nombre)) {
        errores.push("Nombre: solo letras y espacios, entre 2 y 50 caracteres.");
    }
    if (!regexNombre.test(apellido1)) {
        errores.push("Primer apellido: solo letras y espacios, entre 2 y 50 caracteres.");
    }
    if (!regexNombre.test(apellido2)) {
        errores.push("Segundo apellido: solo letras y espacios, entre 2 y 50 caracteres.");
    }
    if (!regexTelefono.test(telefono)) {
        errores.push("Teléfono: debe contener exactamente 10 dígitos numéricos.");
    }
    if (!regexCurp.test(curp)) {
        errores.push("CURP: debe tener 18 caracteres en mayúsculas con el formato oficial.");
    }
    if (!regexEmail.test(email)) {
        errores.push("Correo: debe tener un formato válido, por ejemplo usuario@dominio.com.");
    }

    // Si hay errores, se muestran y se detiene el guardado
    if (errores.length > 0) {
        alert("ERROR DE VALIDACIÓN:\n\n" + errores.join("\n"));
        return;
    }

    /*HARDCODE*/
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        //Hardcode, Impresión de mensajes de salida
    };
    
    //Impresión de mensajes de salida
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    //Impresión de mensajes de salida
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    //Impresión de mensajes de salida
    
    //hardcode
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
    //Impresión de mensajes de salida

    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    //Impresión de mensajes de salida
}

// Hardcode, Impresión de mensajes de salida

/*HARDCODE*/

// Función de diagnóstico (expone información del sistema)
//Impresión de mensajes de salida

// Ejecutar diagnóstico al cargar
//Impresión de mensajes de salida

/*
HARDCODE
*/

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    //Impresión de mensajes de salida
    inicializar();
    
    // Exponer variables globales en consola para "debugging"
    //HardCode
    
    //Impresión de mensajes de salida
});

/*
HARDCODE
*/

//Impresión de mensajes de salida