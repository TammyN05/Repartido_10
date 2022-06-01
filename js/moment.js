/* Mostrar la fecha de hoy con el siguiente formato 2022-05-30
Hacerlo primero usando ‘Date’ de Javascript
Luego usando la librería Moment.js*/

//CON JS

/*let fecha = new Date()

let dia = fecha.getDate()
let mes = fecha.getMonth() + 1
let anyo = fecha.getFullYear()


console.log(`${anyo}-0${mes}-${dia}`)*/

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

/*function validarFecha(fecha) {  
      
    try{        
        var fecha = fecha.split("/");        
        var dia = fecha[0];        
        var mes = fecha[1];        
        var ano = fecha[2];        
        var estado = true;  
         
        if ((dia.length == 2) && (mes.length == 2) && (ano.length == 4)) {        
            switch (parseInt(mes)) {        
                case 1:dmax = 31;break;        
                case 2: if (ano % 4 == 0) dmax = 29; else dmax = 28;        
                break;        
                case 3:dmax = 31;break;        
                case 4:dmax = 30;break;        
                case 5:dmax = 31;break;        
                case 6:dmax = 30;break;        
                case 7:dmax = 31;break;        
                case 8:dmax = 31;break;        
                case 9:dmax = 30;break;        
                case 10:dmax = 31;break;       
                case 11:dmax = 30;break;      
                case 12:dmax = 31;break;       
            }  
              
            dmax!=""?dmax:dmax=-1;if ((dia >= 1) && (dia <= dmax) && (mes >= 1) && (mes <= 12)) {        
            for (var i = 0; i < fecha[0].length; i++) {         
                diaC = fecha[0].charAt(i).charCodeAt(0);        
                (!((diaC > 47) && (diaC < 58)))?estado = false:'';       
                mesC = fecha[1].charAt(i).charCodeAt(0);        
                (!((mesC > 47) && (mesC < 58)))?estado = false:'';       
            }  
         
        } for (var i = 0; i < fecha[2].length; i++) {  
         
        anoC = fecha[2].charAt(i).charCodeAt(0);  
         
        (!((anoC > 47) && (anoC < 58)))?estado = false:'';        
        }} else estado = false;        
        return estado;    
        
   }catch(err){  
    alert("Error fechas");   
 } 
}*/