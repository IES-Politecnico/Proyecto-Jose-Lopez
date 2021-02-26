function verificacion() {
    var contraseña1 = document.getElementById("contr1").value;
    var contraseña2 = document.getElementById("contr2").value;
    var color1 = document.getElementById("resu1");
    var color2 = document.getElementById("resu2");

    if (contraseña1 == contraseña2) {
        color1.innerText = "Las contraseñas coinciden"        
    }
    else{
        color2.innerText = "Las contraseñas no coinciden"
    }
}

function registro() {
    document.getElementById("form.login").className = "oculto";
    document.getElementById("form.registro").className = "visible";
    document.getElementById("Login").className = "visible";
    document.getElementById("Register").className = "oculto";
}