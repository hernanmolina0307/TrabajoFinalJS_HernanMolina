const formulario = document.getElementById('form');

const nombre = document.getElementById('firstName');
const apellido = document.getElementById('lastName');
const email = document.getElementById('email');
const monto = document.getElementById('amount');
const cuotas = document.getElementById('fees');

const montoFinal = document.getElementById('finalAmount');
const cuotasFinales = document.getElementById('finalFees');
const intereses = document.getElementById('interests');
const totalADevolver = document.getElementById('totalAmount');

const tasa = 0.07;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    calcularCuotaPrestamo();
});

// Calculamos la cuota del préstamo
const calcularCuotaPrestamo = () => {
    const cuotaPrestamo = tasa * monto.value / (1 - (1+tasa)**-cuotas.value);
    calcularTotalPrestamo(cuotaPrestamo);
};

// Calculamos el total del préstamo
const calcularTotalPrestamo = (cuotaPrestamo) => {
    const total = Math.ceil(cuotaPrestamo) * cuotas.value;
    const prestamo = construirPrestamo(monto.value, cuotas.value, total - monto.value, total);
    pintarPrestamo(prestamo)
    guardarPrestamoStorage(prestamo)
};

const pintarPrestamo = (prestamo) => {
    montoFinal.innerText = `$${prestamo.monto}`;
    cuotasFinales.innerText = `${prestamo.cuotas}`;
    intereses.innerText = `$${prestamo.intereses}`;
    totalADevolver.innerText = `$${prestamo.total}`;
};

// Factory que me permite crear objetos prestamo
const construirPrestamo = (montoValue, cuotasValue, interesesValue, totalValue) => {
    return {
        monto: montoValue,
        cuotas: cuotasValue,
        intereses: interesesValue,
        total: totalValue
    }
};

const guardarPrestamoStorage = (prestamo) => {
    localStorage.setItem('prestamo', JSON.stringify(prestamo))
};

const obtenerPrestamoStorage = () => {
    const prestamoStorage = JSON.parse(localStorage.getItem('prestamo'));
    return prestamoStorage;
};

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('prestamo')) {
        const prestamoStorage = obtenerPrestamoStorage();
        // Reutilizamos la función pintarPrestamo para volver a mostrar los datos cuando la página se actualice
        pintarPrestamo(prestamoStorage);
    }
})
const simulate = document.getElementById('simulate button');
formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    
    if (form.checkValidity()) {
    
    Swal.fire({
    icon: "success",
    title: "Simulacion realizada",
    text: "Enviaremos a su correo la informacion!"
    })
    }
    
    calcularCuotaPrestamo();
    
    });
    
    