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