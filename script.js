document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const datos = {
        cliente: document.getElementById('cliente').value,
        perrito: document.getElementById('perrito').value,
        telefono: document.getElementById('telefono').value, // Aquí capturamos el cel
        servicio: document.getElementById('servicio').value,
        fecha: new Date().toLocaleDateString()
    };

    console.log("Cita guardada:", datos);
    alert("¡Cita agendada con éxito para " + datos.perrito + "!");
    window.location.href = "index.html";
});
});