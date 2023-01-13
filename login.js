var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "" && password == ""){
//agregar sweet alert
Swal.fire({ 
    icon: 'error',
    title: 'Oops...',
    text: 'Ingrese su usuario y contraseña!',
    })
return false;
}
else if ( username == "" && password == ""){
Swal.fire({
    icon: 'success',
    title: 'Bienvenido!',
    text: 'Usted es usuario!',
    })

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
