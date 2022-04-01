//función que muestra fecha en footer de páginas.
let r = new Date();
document.getElementById("Fecha").innerHTML=r;

//Función que valida datos en formulario

function validarFormulario(){
console.log("Completar datos");
    let lfname = document.getElementById("Nombre").value;
    let lemail = document.getElementById("Correo").value;
    let lmessage = document.getElementById("Mensaje").value;
    console.log("Completar datos");
    console.log("Nombre" + lfname);
    console.log("Correo" + lemail);
    console.log("Mensaje" + lmessage);

//Validación de datos

if ((lfname.length == 0) || (lemail.length == 0) || (lmessage.length == 0))
{
    alert('Favor completar los campos faltantes');
}
else
{
    alert('Hemos recibido su mensaje, nuestro equipo se pondrá en contacto con usted');
}
};

//Datatable

$(document).ready(function () {
    $('#example').DataTable();
  });

  //Color table

//   $(document).ready(function(){
//     $('tr:even').css("background-color", "#cccccc")
//   });

