const moment = require("moment");

/* Mostrar la fecha de hoy con el siguiente formato 2022-05-30
Hacerlo primero usando ‘Date’ de Javascript
Luego usando la librería Moment.js*/

//CON JS

/*let fecha = new Date()

let dia = fecha.getDate()
let mes = fecha.getMonth() + 1
let anyo = fecha.getFullYear()

console.log(`${anyo}-0${mes}-${dia}`)*/

//CON MOMENT


/*const fecha = moment();
console.log((moment().format('YYYY MM DD')));*/


//EJERCICIO 2

/*function existeFecha(fecha){ 
    var fechaf = fecha.split("/");
    var day = fechaf[0];
    var month = fechaf[1];
    var year = fechaf[2];
    var date = new Date(year,month,"");
    if((day- 0) >(date.getDate()-0)){
          return false;
    }
    return true;
}
console.log(existeFecha("30/05/2022"));
console.log(existeFecha("30/02/2022"));*/

// CON MOMENT

/*function validarFecha(fecha){
    return moment(fecha, 'DD/MM/YYYY').isValid() ? console.log("Fecha valida") : console.log("Fecha no valida")
}
validarFecha("29/02/2022")*/


//EJERCICIO 3

/*const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    // 2016-07-11
    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
};

window.addEventListener('load', function () {

    fechaNacimiento.addEventListener('change', function () {
        if (this.value) {
            edad.innerText = `La edad es: ${calcularEdad(this.value)} años`;
        }
    });

});*/

/*let fechaPersona = "2021-06-02"

let fechaMoment = moment(fechaPersona, "YYYY-MM-DD");
let years = moment().diff(fechaMoment, 'years', false);
let days = moment().diff(fechaMoment.add(years, 'years'), 'days', false);
console.log(years);*/