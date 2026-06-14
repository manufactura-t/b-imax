function inyeccion_error(){
    Swal.fire({
        title: "Error de carga",
        icon: "warning",
        theme: 'dark',
        html: '<span>Pagina en mantenimiento, intente mas tarde.</span><br><span>Si el error persiste, reportar al correo de soporte tecnico.</span>'
    });
}

function equipo(){
    Swal.fire({
        title: "Nuestro Equipo",
        theme: 'dark',
        html: "<img src='equipo1.jpeg' style='width: 100%'><img src='equipo2.jpeg' style='width: 100%'><img src='equipo3.jpeg' style='width: 100%'><img src='equipo4.jpeg' style='width: 100%'><img src='equipo5.jpeg' style='width: 100%'>"
    })
}

function datosCont(){
    Swal.fire({
        icon: "info",
        theme: "dark",
        title: "Datos de contacto",
        html: '<span>Tel. B-IMAX: </span><a href="tel:+527225851077" style="color:white">7225851077</a> <br> <span>Email: </span><a href="mailto:ejc17099405@gmail.com" style="color: white">ejc17099405@gmail.com</a> <br> <span>Soporte Tecnico: </span><a href="mailto:zgfiodor@gmail.com" style="color: white">zgfiodor@gmail.com</a>'
    })
}
