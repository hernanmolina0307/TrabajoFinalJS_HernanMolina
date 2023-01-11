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
const valorPorCouta = document.getElementById('valorPorCouta');

const tasa = 0.07; // 70%

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    calcularCuotaPrestamo();
});

const calcularCuotaPrestamo = () => {
    const cuotaPrestamo = tasa * monto.value / (1 - (1 + tasa) ** -cuotas.value);
    calcularTotalPrestamo(cuotaPrestamo);
};

const calcularTotalPrestamo = (cuotaPrestamo) => {
    const total = Math.ceil(cuotaPrestamo) * cuotas.value;

    const prestamo = construirPrestamo(monto.value, cuotas.value, total - monto.value, total);

    pintarPrestamo(prestamo)

    guardarPrestamoStorage(prestamo)
};

const calcularValorCuota= () => {
    const valorPorCouta =  (totalADevolver / cuotasFinales);
}  
   

    (prestamo) => {
        montoFinal.innerText = `$${prestamo.monto}`;
        intereses.innerText = `$${prestamo.intereses}`;
        cuotasFinales.innerText = `${prestamo.cuotas}`;
        valorCouta.innerText = `${prestamo.valorCouta}`;
        totalADevolver.innerText = `$${prestamo.total}`;
    }

const construirPrestamo = (montoValue, interesesValue, cuotasValue, valorCouta, totalValue) => {
    return {
        monto: montoValue,
        intereses: interesesValue,
        cuotas: cuotasValue,
        valorCuota: valorValue,
        total: totalValue,
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
        pintarPrestamo(prestamoStorage);
    }
})
const simulate = document.getElementById('simulate');
simulate.addEventListener('click', () => {
    // Lógica para ir al checkout
    
        Swal.fire({
            icon: 'success',
            title: 'Simulacion realizada',
           text: 'Enviaremos a su correo la informacion!'
        })
});